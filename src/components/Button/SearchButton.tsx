import React from 'react';
import { InputGroupProps } from '@layouts/InputGroup/InputGroup';
import { StyledSearchButton } from './Button.style';
import IconSearch from '@images/icon-search.png';

const SearchButton: React.FC<InputGroupProps> = ({ searchInputs, setSearchInputs }) => {
  const onClick = () => {
    setSearchInputs(searchInputs);
  };

  return (
    <StyledSearchButton onClick={onClick}>
      <img src={IconSearch} alt="search button" />
    </StyledSearchButton>
  );
};

export default SearchButton;
