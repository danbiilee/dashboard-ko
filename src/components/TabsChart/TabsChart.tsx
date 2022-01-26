import React from 'react';
import { StyledTabsChart } from './TabsChart.style';
import { ButtonsProps } from '@components/RollingTabs/RollingTabs';
import RollingTabs from '@components/RollingTabs';
import Chart from '@components/Chart';

interface TabsChartProps extends ButtonsProps {}

const TabsChart: React.FC<TabsChartProps> = ({ type, tabs, isPlay, handleClick, handlePlay }) => {
  const selectedTab = tabs.find((tab) => tab.selected);

  return (
    <StyledTabsChart>
      <RollingTabs type={type} tabs={tabs} isPlay={isPlay} handleClick={handleClick} handlePlay={handlePlay} />
      <Chart type={type} param={{ tab: selectedTab?.value! }} />
    </StyledTabsChart>
  );
};

export default TabsChart;
