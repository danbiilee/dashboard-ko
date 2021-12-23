import React from 'react';
import Main from '@layouts/Main';
import { AlarmContentBox as ContentBox } from '@layouts/ContentBox';
import Grid from '@components/Grid';
const AlarmDashboard = () => {
  return (
    <Main type="dashboard">
      <ContentBox
        title={`팀별 장애현황 / ${new Date().getFullYear()}년 누적`}
        tooltip={`${TOOLTIP.pre} ${TOOLTIP.obs}`}
      >
        <div>test</div>
      </ContentBox>
      <ContentBox title="팀별 알람현황" tooltip={`${TOOLTIP.pre} ${TOOLTIP.team}`} titleSize="lg">
        <div>test</div>
      </ContentBox>
      <ContentBox title="주별 알람현황" tooltip={`${TOOLTIP.pre} ${TOOLTIP.chartWeek}`} titleSize="lg">
        <div>test</div>
      </ContentBox>
      <ContentBox title="서비스별 발생현황 TOP10 / 월" tooltip={`${TOOLTIP.pre} ${TOOLTIP.month}`}>
        <Grid type="month" />
      </ContentBox>
      <ContentBox title="알람 미조치 리스트 TOP10" tooltip={`${TOOLTIP.pre} ${TOOLTIP.notTaken}`}>
        <Grid type="notTaken" />
      </ContentBox>
      <ContentBox title="알람별 발생현황 TOP10 / 주" tooltip={`${TOOLTIP.pre} ${TOOLTIP.gridWeek}`}>
        <Grid type="week" />
      </ContentBox>
      <ContentBox title="알람별 증감현황 TOP10 / 전주대비" tooltip={`${TOOLTIP.pre} ${TOOLTIP.prepare}`}>
        <Grid type="prepare" />
      </ContentBox>
      <ContentBox title="시간별 알람현황" tooltip={`${TOOLTIP.pre} ${TOOLTIP.time}`} titleSize="lg">
        <div>test</div>
      </ContentBox>
    </Main>
  );
};

export default AlarmDashboard;
