import React from 'react';
import { StyledRollingTabs, StyledRollingTab } from './RollingTabs.style';
import { Tab, KeyOfTabs } from '@customTypes/common';
import IconPlay from '@images/btn-play.png';
import IconPause from '@images/btn-pause.png';

export interface ButtonsProps {
  type: KeyOfTabs;
  tabs: Tab[];
  isPlay: boolean;
  handleClick: (type: KeyOfTabs, id: number) => void;
  handlePlay: (type: KeyOfTabs) => void;
}

const RollingTabs: React.FC<ButtonsProps> = ({ type, tabs, isPlay, handleClick, handlePlay }) => {
  return (
    <StyledRollingTabs>
      <button className="play" onClick={() => handlePlay(type)}>
        <img src={isPlay ? IconPause : IconPlay} alt="play" />
      </button>
      <div className="buttons">
        {tabs.map((tab, i) => (
          <StyledRollingTab key={i} selected={tab.selected} onClick={() => handleClick(type, tab.id)}>
            {tab.title}
          </StyledRollingTab>
        ))}
      </div>
    </StyledRollingTabs>
  );
};

export default RollingTabs;
