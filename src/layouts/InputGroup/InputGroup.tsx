import React, { useState } from 'react';
import { StyledInputGroup } from './InputGroup.style';
import { SearchInputs } from '@customTypes/common';
import Label from '@components/Label';
import { ExcelButton, SearchButton } from '@components/Button';
export interface InputGroupProps {
  searchInputs: SearchInputs;
  setSearchInputs: React.Dispatch<React.SetStateAction<SearchInputs>>;
}

const InputGroup: React.FC<InputGroupProps> = ({ searchInputs, setSearchInputs }) => {
  const [localInputs, setLocalInputs] = useState<SearchInputs>(searchInputs);
  return (
    <StyledInputGroup>
      <Label name="팀명">
        <span>select</span>
      </Label>
      <Label name="서비스명">
        <span>select</span>
      </Label>
      <Label name="기간">
        <span>date</span>
      </Label>
      <SearchButton searchInputs={localInputs} setSearchInputs={setSearchInputs} />
      <ExcelButton searchInputs={localInputs} />
    </StyledInputGroup>
  );
};

export default InputGroup;
