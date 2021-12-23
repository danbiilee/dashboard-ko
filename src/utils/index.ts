import { SearchInputs } from '@customTypes/common';

export const getQueryString = (params: SearchInputs) => {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
    .join('&');
};
