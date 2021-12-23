import React, { useState, useEffect } from 'react';
import { StyledInputGroup } from './InputGroup.style';
import { SearchInputs, MappedRelation } from '@customTypes/common';
import Label from '@components/Label';
import Select from '@components/Select';
import { ExcelButton, SearchButton } from '@components/Button';
import { useRelation } from '@hooks/useRelation';

export interface InputGroupProps {
  searchInputs: SearchInputs;
  setSearchInputs: React.Dispatch<React.SetStateAction<SearchInputs>>;
}

const InputGroup: React.FC<InputGroupProps> = ({ searchInputs, setSearchInputs }) => {
  const { data, isLoading, isError } = useRelation();
  const [mappedNames, setMappedNames] = useState<MappedRelation[]>();
  const [localInputs, setLocalInputs] = useState<SearchInputs>(searchInputs);

  const handleChange = (name: string, value: string) => {
    if (name === 'team') {
      setMappedNames((mapped) => {
        const tValue = value === 'total' ? '전체' : value;
        return mapped?.map((map) => (map.team === tValue ? { ...map, selected: true } : { ...map, selected: false }));
      });
    }

    setLocalInputs((localInputs) => ({ ...localInputs, [name]: value }));
  };

  useEffect(() => {
    if (isLoading || isError) {
      return;
    }
    setMappedNames(data);
  }, [data, isLoading, isError]);

  useEffect(() => {
    if (localInputs.service === 'total') {
      return;
    }
    setLocalInputs((localInputs) => ({ ...localInputs, service: 'total' }));
  }, [localInputs.team]);

  return (
    <StyledInputGroup>
      <Label name="팀명">
        <Select type="team" searchInputs={localInputs} mappedNames={mappedNames!} handleChange={handleChange} />
      </Label>
      <Label name="서비스명">
        <Select type="service" searchInputs={localInputs} mappedNames={mappedNames!} handleChange={handleChange} />
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
