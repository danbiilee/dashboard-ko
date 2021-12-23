import React from 'react';
import { ContentBoxProps } from './AlarmContentBox';
import { StyledContentBox } from './ContextBox.style';

interface CWContentBoxProps extends Pick<ContentBoxProps, 'children'> {}

const CriticalWarningContentBox: React.FC<CWContentBoxProps> = ({ children }) => {
  return <StyledContentBox>{children}</StyledContentBox>;
};

export default CriticalWarningContentBox;
