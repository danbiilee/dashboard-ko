import { GridData, GridTypes } from '@customTypes/common';

export const GRID_CLASS: Record<keyof GridData, string> = {
  NO: 'no',
  SERVICE_NAME: 'service-nm',
  TEAM_NAME: 'team-nm',
  CNT: 'cnt',
  ALARMSEVERITY: 'grade',
  ALARM_NAME: 'alarm-nm',
  DAY: 'day',
  THIS_WEEK: 'this-week',
  LAST_WEEK: 'last-week',
  INC: 'ratio',
  CONDITIONLOGTEXT: 'log',
  IP: '',
};

export const GRID_COLUMNS: Record<GridTypes, string[]> = {
  month: ['No', '서비스명', '팀명', '건수'],
  notTaken: ['No', '팀명', '등급', '알람명', '기간', '비고'],
  week: ['No', '알람명', '서비스명', '건수'],
  prepare: ['No', '알람명', '서비스명', '금주', '전주', '증감율(%)'],
};
