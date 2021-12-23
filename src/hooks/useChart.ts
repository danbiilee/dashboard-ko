import useSWR from 'swr';
import { ChartParam, ChartTabQuery } from '@customTypes/common';
import { getQueryString } from '@customUtils/index';

const fetcher = async (url: string, path: string) => {
  const res = await fetch(url);
  const jsonData = await res.json();
  return path === 'week' || path === 'time' ? jsonData.metrics.reverse() : jsonData.metrics;
};

export const useChart = (type: string, path?: string, param?: ChartParam) => {
  let url;

  if (ENV.IS_LOCAL) {
    url = `${ENV.API_URL.local}/${ENV.API_REST_URI.CHART[type]}`;

    if (type !== 'search') {
      if (path) {
        url += `/${path}`;
      }
      if (param) {
        url += `/tab=${(param as ChartTabQuery).tab}`;
      }
    }

    url += '.json';
  } else {
    const mode = process.env['NODE_ENV']!;
    url = `${ENV.API_URL[mode]}/${ENV.API_REST_URI.CHART[type]}`;

    if (path) {
      url += `/${path}`;
    }
    if (param) {
      url += `?${getQueryString(param)}`;
    }
  }

  const { data, error } = useSWR([url, path], fetcher, {
    refreshInterval: type === 'search' ? 0 : ENV.REFRESH_INTERVAL_TIME,
  });

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
};
