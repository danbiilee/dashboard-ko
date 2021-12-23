import React, { useState } from 'react';
import { StyledInputGroup } from './InputGroup.style';
import { SearchInputs } from '@customTypes/common';
interface InputGroupProps {
  searchInputs: SearchInputs;
  setSearchInputs: React.Dispatch<React.SetStateAction<SearchInputs>>;
}

const InputGroup: React.FC<InputGroupProps> = ({ searchInputs, setSearchInputs }) => {
  const [localInputs, setLocalInputs] = useState<SearchInputs>(searchInputs);
  return (
    <StyledInputGroup>
      <div>input group</div>
    </StyledInputGroup>
  );
};

export default InputGroup;
