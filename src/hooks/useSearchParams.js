import { useNavigate, useLocation } from 'react-router-dom';

const useSearchParams = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const search = params.get('search') ?? '';

  const setSearch = searchValue => {
    if (searchValue.trim() === '') {
      navigate('.', { replace: true });
    } else {
      navigate(`?search=${encodeURIComponent(searchValue)}`);
    }
  };

  return [search, setSearch];
}

export { useSearchParams };