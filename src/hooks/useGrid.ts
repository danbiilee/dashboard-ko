import useSWR from 'swr';
import { GridData } from '@customTypes/common';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const jsonData = await res.json();
  return jsonData.metrics.map((data: GridData, i: number) => ({ NO: i + 1, ...data }));
};

export const useGrid = (path: string) => {
  let url;

  if (ENV.IS_LOCAL) {
    url = `${ENV.API_URL.local}/${ENV.API_REST_URI.GRID}/${path}.json`;
  } else {
    const mode = process.env['NODE_ENV']!;
    url = `${ENV.API_URL[mode]}/${ENV.API_REST_URI.GRID}/${path}`;
  }

  const { data, error } = useSWR(url, fetcher, ENV.SWR_CONFIG.MAIN);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
};
