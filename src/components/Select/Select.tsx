import React from 'react';
import { StyledSelect } from './Select.style';
import ArrowBox from '@images/btn-dropdown.png';
import { SearchInputs, MappedRelation } from '@customTypes/common';
import { Select as A_Select } from 'antd';
import { areEqual } from '@customUtils/index';

const { Option } = A_Select;

export interface SelectProps {
  type: 'team' | 'service';
  searchInputs: SearchInputs;
  mappedNames: MappedRelation[];
  handleChange: (name: string, value: string) => void;
}

const Select: React.FC<SelectProps> = ({ type, searchInputs, mappedNames, handleChange }) => {
  const selected = mappedNames?.find((item) => item.selected);

  const onChange = (value: string) => {
    handleChange(type, value);
  };

  return (
    <StyledSelect>
      <A_Select
        className={type}
        value={searchInputs[type]}
        suffixIcon={<img src={ArrowBox} alt="picker suffix" />}
        onChange={onChange}
        listHeight={305}
      >
        {type === 'team'
          ? mappedNames?.map((data, i) => (
              <Option key={i} className="option" value={data[type] === '전체' ? 'total' : data[type]}>
                {data[type]}
              </Option>
            ))
          : selected?.service.map((data, i) => (
              <Option key={i} className="option" value={data === '전체' ? 'total' : data}>
                {data}
              </Option>
            ))}
      </A_Select>
    </StyledSelect>
  );
};

export default React.memo(Select, areEqual);
