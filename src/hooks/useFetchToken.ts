import fetchJsonp from 'fetch-jsonp';

interface Token {
  uuid: string;
  publicKeyExponent: string;
  publicKeyModulus: string;
}

export const useFetchToken = async (): Promise<{
  data: Token | undefined;
  isError: any;
}> => {
  const result = {
    data: undefined,
    isError: undefined,
  };

  try {
    const res = await fetchJsonp(`${ENV.EMS_URL}/${ENV.EMS_REST_URI.token}`);
    result.data = await res.json();
  } catch (error: any) {
    result.isError = error;
  }

  return result;
};
