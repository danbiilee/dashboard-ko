import React from 'react';
import { StyledContentBox, StyledAlarmContentBox } from './ContextBox.style';
import IconHelp from '@images/icon-help.png';

export interface ContentBoxProps {
  title: string;
  tooltip: string;
  titleSize?: string;
  children: React.ReactNode;
}

const AlarmContentBox: React.FC<ContentBoxProps> = ({ title, tooltip, titleSize, children }) => {
  return (
    <StyledAlarmContentBox titleSize={titleSize}>
      <div className="header">
        <div className="helper">
          <img className="icon" src={IconHelp} alt="help icon" />
          <div className="tooltip">{tooltip}</div>
        </div>
        <h2 className="title">{title}</h2>
      </div>
      <StyledContentBox>{children}</StyledContentBox>
    </StyledAlarmContentBox>
  );
};

export default AlarmContentBox;
