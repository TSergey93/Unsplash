import { useState, useEffect, useRef } from 'react';
import { isEqual, debounce, throttle } from 'lodash';

const TIMEOUT = 250;
const SCROLL_THRESHOLD = 400;
const INITIAL_DATA = { data: [], totalPages: 0, error: null };
const OBSERVE_OPTIONS = {
  root: null,
  rootMargin: `0px 0px ${SCROLL_THRESHOLD}px 0px`,
  threshold: 1,
};

const useScrollRequest = (requestFn, variables = {}, blockRef) => {
  const prevPageRef = useRef(null);
  const variablesRef = useRef(variables);

  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [{ data, totalPages, error }, setData] = useState(INITIAL_DATA);
  const [variablesState, setVariablesState] = useState(variables);

  // Обновление переменных и сброс страницы
  useEffect(() => {
    if (!isEqual(variables, variablesState)) {
      setPage(1);
      setData(INITIAL_DATA);
      setVariablesState(variables);
      variablesRef.current = variables;
    }
  }, [variables, variablesState]);

  // Загрузка данных
  useEffect(() => {
    if (!requestFn || (prevPageRef.current === page && isEqual(variables, variablesState))) return;

    prevPageRef.current = page;

    setLoading(true);

    requestFn({...variablesRef.current, page})
      .then(({ data: resultData, totalPages, error }) => {
        setData(prev => ({
          data: [...prev.data, ...resultData],
          totalPages,
          error,
        }));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, variables, variablesState, requestFn]);

  // Догрузка данных для заполнения первого экрана
  useEffect(() => {
    const loadInitialContent = throttle(() => {
      const documentHeight = document.body.scrollHeight;
      const documentOffsetHeight = document.documentElement.offsetHeight;

      if (data.length > 0 && !isLoading && documentHeight === documentOffsetHeight) {
        setPage(prev => prev + 1);
      }
    }, TIMEOUT);

    setTimeout(loadInitialContent, TIMEOUT);

    window.addEventListener('resize', loadInitialContent);

    return () => {
      window.removeEventListener('resize', loadInitialContent);
    };
  }, [isLoading, data]);

  // Догрузка данных при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(debounce(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading && page < totalPages) {
          setPage(prev => prev + 1);
        }
      }, TIMEOUT),
      OBSERVE_OPTIONS,
    );

    if (blockRef?.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef?.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, [isLoading, page, totalPages, blockRef]);

  return { isLoading: isLoading && page === 1, data, error };
}

export { useScrollRequest };