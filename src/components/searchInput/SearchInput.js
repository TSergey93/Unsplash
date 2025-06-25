import { useState, useRef } from 'react';
import { useSearchParams } from '../../hooks';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { Button } from '../button';
import {
  SearchInputClear,
  SearchInputStyled,
  SearchInputWrapper,
  SearchInputContainer,
} from './styled';

const SearchInput = ({ placeholder = 'Введите текст' }) => {
  const searchInputRef = useRef(null);
  const [searchParam, setSearchParam] = useSearchParams();

  const [searchText, setSearchText] = useState(searchParam ?? '');

  const handleChangeText = ({ target }) => {
    setSearchText(target.value);
  };

  const handleSearch = () => {
    setSearchParam(searchText);
  };

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') handleSearch();
  };

  const handleClear = () => {
    setSearchText('');
    searchInputRef.current.focus();
  };

  return (
    <SearchInputWrapper>
      <SearchInputContainer>
        <SearchIcon />
        <SearchInputStyled
          ref={searchInputRef}
          type="text"
          placeholder={placeholder}
          value={searchText}
          onChange={handleChangeText}
          onKeyPress={handleKeyPress}
        />
        {searchText && <SearchInputClear onClick={handleClear}/>}
      </SearchInputContainer>
      <Button onClick={handleSearch}>Искать</Button>
    </SearchInputWrapper>
  );
};

export { SearchInput };
