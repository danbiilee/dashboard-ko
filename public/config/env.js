window.ENV = {
  IS_LOCAL: false,
  EMS_URL: 'http://192.168.233.173', // 121.78.87.196
  EMS_REST_URI: {
    token: 'rest/token/getPublic',
    alarm: 'management/alarmconsolemashup',
  },
  API_URL: {
    local: 'http://localhost:4000/mocks',
    development: 'http://192.168.10.34:9001/kolonAlarm-service',
    production: 'http://kmonboard.kolon.com:8882/kolonAlarm-service',
  },
  API_REST_URI: {
    GRID: 'main/grid',
    CHART: {
      main: 'main/chart',
      search: 'search/chart',
    },
    EXCEL: 'search/excel',
    MAPPING: 'search/relation',
  },
  TAB_ROLLING_TIME: 5000, // 5초
  SWR_CONFIG: {
    ERROR_RETRY_COUNT: 1,
    MAIN: {
      refreshInterval: 180000,
      dedupingInterval: 180000,
    },
    SEARCH: {
      refreshInterval: 0,
      dedupingInterval: 2000,
    },
  },
};

window.TEAM_NAME = [
  {
    id: 1,
    title: 'SmartWork팀',
    order: 1,
  },
  {
    id: 2,
    title: 'Infra팀',
    order: 2,
  },
  {
    id: 3,
    title: '정보보안팀',
    order: 3,
  },
  {
    id: 4,
    title: 'Mobile융합팀',
    order: 4,
  },
  {
    id: 5,
    title: 'Architecture팀',
    order: 5,
  },
  {
    id: 6,
    title: 'FPM서비스팀',
    order: 6,
  },
  {
    id: 7,
    title: 'SCM서비스팀',
    order: 7,
  },
  {
    id: 8,
    title: '제조서비스팀',
    order: 8,
  },
  {
    id: 9,
    title: 'Smart Factory팀',
    order: 9,
  },
  {
    id: 10,
    title: '건설/모터스서비스팀',
    order: 10,
  },
  {
    id: 11,
    title: 'HR/IT서비스팀',
    order: 11,
  },
];

window.TOOLTIP = {
  pre: '• 기준정보 :',
  obs: '당해년 A급, B급 장애 누적',
  team: '주(금일포함 최근 7일), 월(금일 포함 최근 30일)',
  chartWeek: '금일 포함 최근 7일',
  month: '금일 포함 최근 30일',
  notTaken: '현재기준 미조치 알람',
  gridWeek: '금일 포함 최근 7일',
  prepare: '전주대비 알람 증감',
  time: '최근 24시간',
};
