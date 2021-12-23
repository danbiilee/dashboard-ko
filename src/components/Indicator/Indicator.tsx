import React from 'react';
import { Spin } from 'antd';
import { StyledIndicator } from './Indicator.style';

interface IndicatorProps {
  isLoading?: boolean;
  size?: 'default' | 'small' | 'large';
  isError?: any;
  isEmpty?: boolean;
}

const Indicator: React.FC<IndicatorProps> = ({ isLoading, size, isError, isEmpty }) => {
  return (
    <>
      {isLoading && <Spin size={size} />}
      {isError && <StyledIndicator>{isError.toString()}</StyledIndicator>}
      {isEmpty && <StyledIndicator>No data to display</StyledIndicator>}
    </>
  );
};

export default Indicator;
