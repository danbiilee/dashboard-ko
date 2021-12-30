import React, { useState, useEffect, useCallback } from 'react';
import { StyledInputGroup } from './InputGroup.style';
import { SearchInputs } from '@customTypes/common';
import Label from '@components/Label';
import Select from '@components/Select';
import RangePicker from '@components/RangePicker';
import { ExcelButton, SearchButton } from '@components/Button';
import { useMappedNames, useSetMappedNames } from '@contexts/Relation';
import { Alert } from 'antd';

export const defaultAlertState = {
  status: false,
  message: '',
};

export interface InputGroupProps {
  searchInputs: SearchInputs;
  setSearchInputs: React.Dispatch<React.SetStateAction<SearchInputs>>;
}

const InputGroup: React.FC<InputGroupProps> = ({ searchInputs, setSearchInputs }) => {
  const mappedNames = useMappedNames();
  const setMappedNames = useSetMappedNames();
  const [localInputs, setLocalInputs] = useState<SearchInputs>(searchInputs);
  const [alert, setAlert] = useState(defaultAlertState);

  const handleChange = useCallback(
    (name: string, value: string) => {
      if (name === 'team') {
        const tValue = value === 'total' ? '전체' : value;
        const mapped = mappedNames?.map((map) =>
          map.team === tValue ? { ...map, selected: true } : { ...map, selected: false },
        )!;
        setMappedNames(mapped);
      }

      setLocalInputs((localInputs) => ({ ...localInputs, [name]: value }));
    },
    [mappedNames],
  );

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
        <RangePicker searchInputs={localInputs} handleChange={handleChange} />
      </Label>
      <SearchButton searchInputs={localInputs} setSearchInputs={setSearchInputs} />
      <ExcelButton searchInputs={localInputs} setAlert={setAlert} />
      {alert.status && (
        <Alert
          message="Warning"
          description={alert.message}
          type="warning"
          showIcon
          closable
          afterClose={() => setAlert((alert) => ({ ...alert, status: false }))}
        />
      )}
    </StyledInputGroup>
  );
};

export default InputGroup;
