import { ChartParam } from '@customTypes/common';
import { dequal } from 'dequal';

export const getQueryString = (param: ChartParam) => {
  return Object.entries(param)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
    .join('&');
};

export function areEqual<T>(prevProps: T, nextProps: T): boolean {
  return dequal(prevProps, nextProps);
}
