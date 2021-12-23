import fetchJsonp from 'fetch-jsonp';

export const useEmsUrl = async (ip: string, alarmName?: string) => {
  let jsonData;
  try {
    const res = await fetchJsonp(`${ENV.EMS_URL}/${ENV.EMS_REST_URI.token}`);
    jsonData = await res.json();
  } catch (e) {
    alert(`EMS Public Key Token을 가져오는데 실패했습니다. 다시 시도해주세요. \n${e}`);
    return;
  }

  const { uuid, publicKeyExponent, publicKeyModulus } = jsonData;
  const rsa = new RSAKey();
  rsa.setPublic(publicKeyModulus, publicKeyExponent);

  const sid = rsa.encrypt('admin');
  const spw = rsa.encrypt('Nkia!234');
  console.log('fetchJsonp success', uuid, sid, spw);

  ip = '192.168.233.193';
  alarmName = 'test';

  let url = `${ENV.EMS_URL}/${ENV.EMS_REST_URI.alarm}/${uuid}/${sid}/${spw}?alarmIp=${encodeURIComponent(ip)}`;
  if (alarmName) {
    url += `&alarmName=${encodeURIComponent(alarmName)}`;
  }

  window.open(url);
};
