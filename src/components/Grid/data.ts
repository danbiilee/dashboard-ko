interface IndexClassNames {
  [index: string]: string;
}

interface IndexColumns {
  [index: string]: string[];
}

export const classNames: IndexClassNames = {
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
};

export const columns: IndexColumns = {
  month: ['No', '서비스명', '팀명', '건수'],
  notTaken: ['No', '팀명', '등급', '알람명', '기간', '비고'],
  week: ['No', '알람명', '서비스명', '건수'],
  prepare: ['No', '알람명', '서비스명', '금주', '전주', '증감율(%)'],
};
