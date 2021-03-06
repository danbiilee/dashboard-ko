import { ChartParam, ChartData, TeamName } from '@customTypes/common';
import { dequal } from 'dequal';

export const getQueryString = (param: ChartParam) => {
  return Object.entries(param)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
    .join('&');
};

export function areEqual<T>(prevProps: T, nextProps: T): boolean {
  return dequal(prevProps, nextProps);
}

const getTeamNames = () => {
  return TEAM_NAME.sort((a: TeamName, b: TeamName) => a.order - b.order).map((tn: TeamName) => tn.title);
};

export const getCategories = (type: string, data: ChartData[]) => {
  let categories: string[] = [];

  switch (type) {
    case 'obs':
    case 'team':
      categories = getTeamNames();
      break;
    case 'week':
      categories = data.map((d: ChartData) => d.THIS_WEEK!);
      break;
    case 'time':
    case 'search':
      categories = data.map((d: ChartData) => d.DAY!);
      break;
    default:
      console.log(`Get Chart Categories: ${type} is not allowed!`);
  }

  return categories;
};

export const getSeries = (type: string, data: ChartData[], series: any) => {
  let result: number[] = [];
  const names = getTeamNames();
  let criticals: number[] = [];
  let troubles: number[] = [];
  let totals: number[] = [];

  switch (type) {
    case 'obs':
      const a: number[] = [];
      const b: number[] = [];
      for (let name of names) {
        const filtered = data.find((d: ChartData) => d.TEAM_NAME === name);
        a.push(filtered ? filtered.A! : 0);
        b.push(filtered ? filtered.B! : 0);
      }
      result = series.map((s: any) => (s.name === 'A급' ? { ...s, data: a } : { ...s, data: b }));
      break;
    case 'team':
      criticals = [];
      troubles = [];
      for (let name of names) {
        const filtered = data.find((d: ChartData) => d.TEAM_NAME === name);
        criticals.push(filtered ? filtered.CRITICAL! : 0);
        troubles.push(filtered ? filtered.TROUBLE! : 0);
      }
      result = series.map((s: any) => (s.name === '심각' ? { ...s, data: criticals } : { ...s, data: troubles }));
      break;
    case 'week':
      const thisWeeks: number[] = [];
      const lastWeeks: number[] = [];
      for (let { THIS_CNT, LAST_CNT } of data) {
        thisWeeks.push(THIS_CNT!);
        lastWeeks.push(LAST_CNT!);
      }
      result = series.map((s: any) => (s.name === '금주' ? { ...s, data: thisWeeks } : { ...s, data: lastWeeks }));
      break;
    case 'time':
    case 'search':
      criticals = [];
      troubles = [];
      totals = [];
      for (let { CRITICAL, TROUBLE } of data) {
        criticals.push(CRITICAL!);
        troubles.push(TROUBLE!);
        totals.push(CRITICAL! + TROUBLE!);
      }
      result = series.map((s: any) => {
        if (s.name === '심각') return { ...s, data: criticals };
        else if (s.name === '경고') return { ...s, data: troubles };
        else return { ...s, data: totals };
      });
      break;
    default:
      console.log(`Get Chart Series: ${type} is not allowed!`);
  }

  return result;
};

export const openEMS = async (param: { data: any; ip: string; alarmName?: string }) => {
  const { data, ip, alarmName } = param;
  const { uuid, publicKeyExponent, publicKeyModulus } = data!;

  const rsa = new RSAKey();
  rsa.setPublic(publicKeyModulus, publicKeyExponent);

  const sid = rsa.encrypt('admin');
  const spw = rsa.encrypt('Nkia!234');

  let url = `${ENV.EMS_URL}/${ENV.EMS_REST_URI.alarm}/${uuid}/${sid}/${spw}?alarmIp=${encodeURIComponent(ip)}`;
  if (alarmName) {
    url += `&alarmName=${encodeURIComponent(alarmName)}`;
  }

  window.open(url);
};
