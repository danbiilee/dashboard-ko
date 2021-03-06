import React, { useRef, useState, useEffect, useCallback } from 'react';
import Main from '@layouts/Main';
import { AlarmContentBox as ContentBox } from '@layouts/ContentBox';
import Grid from '@components/Grid';
import Chart from '@components/Chart';
import TabsChart from '@components/TabsChart';
import { tabsData, playTabsData, selectedTabData } from '@components/TabsChart/data';
import { Tab, KeyOfTabs } from '@customTypes/common';

const AlarmDashboard = () => {
  const [tabs, setTabs] = useState(tabsData);
  const [playTabs, setPlayTabs] = useState(playTabsData);
  const selectedTab = useRef(selectedTabData);
  const weekTimer: React.MutableRefObject<NodeJS.Timer | undefined> = useRef();
  const teamTimer: React.MutableRefObject<NodeJS.Timer | undefined> = useRef();

  const handleClickTab = useCallback((type: KeyOfTabs, id: number) => {
    selectedTab.current[type] = id;
    setTabs((tabs) => ({
      ...tabs,
      [type]: tabs[type].map((tabObj: Tab) =>
        tabObj.id === id ? { ...tabObj, selected: true } : { ...tabObj, selected: false },
      ),
    }));
  }, []);

  const handlePlay = useCallback((type: KeyOfTabs) => {
    setPlayTabs((playTabs) => ({ ...playTabs, [type]: !playTabs[type] }));
  }, []);

  const handleInterval = useCallback((type: KeyOfTabs) => {
    const curId = selectedTab.current[type];
    let nextId;

    if (curId + 1 > tabs[type].length - 1) {
      nextId = 0;
    } else {
      nextId = curId + 1;
    }

    handleClickTab(type, nextId);
  }, []);

  useEffect(() => {
    if (!playTabs.team) {
      return;
    }

    teamTimer.current = setInterval(() => handleInterval('team'), ENV.TAB_ROLLING_TIME);

    return () => {
      clearInterval(teamTimer.current!);
    };
  }, [playTabs.team]);

  useEffect(() => {
    if (!playTabs.week) {
      return;
    }

    weekTimer.current = setInterval(() => handleInterval('week'), ENV.TAB_ROLLING_TIME);

    return () => {
      clearInterval(weekTimer.current!);
    };
  }, [playTabs.week]);

  return (
    <Main type="dashboard">
      <ContentBox
        title={`?????? ???????????? / ${new Date().getFullYear()}??? ??????`}
        tooltip={`${TOOLTIP.pre} ${TOOLTIP.obs}`}
      >
        <Chart type="obs" />
      </ContentBox>
      <ContentBox title="?????? ????????????" tooltip={`${TOOLTIP.pre} ${TOOLTIP.team}`} titleSize="lg">
        <TabsChart
          type="team"
          tabs={tabs.team}
          isPlay={playTabs.team}
          handleClick={handleClickTab}
          handlePlay={handlePlay}
        />
      </ContentBox>
      <ContentBox title="?????? ????????????" tooltip={`${TOOLTIP.pre} ${TOOLTIP.chartWeek}`} titleSize="lg">
        <TabsChart
          type="week"
          tabs={tabs.week}
          isPlay={playTabs.week}
          handleClick={handleClickTab}
          handlePlay={handlePlay}
        />
      </ContentBox>
      <ContentBox title="???????????? ???????????? TOP10 / ???" tooltip={`${TOOLTIP.pre} ${TOOLTIP.month}`}>
        <Grid type="month" />
      </ContentBox>
      <ContentBox title="?????? ????????? ????????? TOP10" tooltip={`${TOOLTIP.pre} ${TOOLTIP.notTaken}`}>
        <Grid type="notTaken" />
      </ContentBox>
      <ContentBox title="????????? ???????????? TOP10 / ???" tooltip={`${TOOLTIP.pre} ${TOOLTIP.gridWeek}`}>
        <Grid type="week" />
      </ContentBox>
      <ContentBox title="????????? ???????????? TOP10 / ????????????" tooltip={`${TOOLTIP.pre} ${TOOLTIP.prepare}`}>
        <Grid type="prepare" />
      </ContentBox>
      <ContentBox title="????????? ????????????" tooltip={`${TOOLTIP.pre} ${TOOLTIP.time}`} titleSize="lg">
        <Chart type="time" />
      </ContentBox>
    </Main>
  );
};

export default AlarmDashboard;
