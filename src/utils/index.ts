import { ChartParam } from '@customTypes/common';

export const getQueryString = (param: ChartParam) => {
  return Object.entries(param)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
    .join('&');
};
