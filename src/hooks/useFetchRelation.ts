import { MappedRelation, Relation } from '@customTypes/common';

export const getMappedNames = (data: Relation[]) => {
  const mapped: MappedRelation[] = [];
  const services = new Set<string>();

  for (let { TEAM_NAME: tName, SERVICE_NAME: sName } of data) {
    services.add(sName);
    const matched = mapped.find((item: MappedRelation) => item.team === tName);

    if (!matched) {
      mapped.push({
        team: tName,
        service: ['전체', sName],
        selected: false,
      });
    } else {
      (matched.service as string[]).push(sName);
    }
  }

  const serviceArr = Array.from(services);
  serviceArr.sort();

  mapped.splice(0, 0, {
    team: '전체',
    service: ['전체', ...serviceArr],
    selected: true,
  });

  return mapped;
};

const fetcher = async (
  url: string,
  setMappedNames: React.Dispatch<React.SetStateAction<MappedRelation[] | undefined>>,
) => {
  const res = await fetch(url);
  const jsonData = await res.json();
  setMappedNames(getMappedNames(jsonData.metrics));
};

export const useFetchRelation = (
  setMappedNames: React.Dispatch<React.SetStateAction<MappedRelation[] | undefined>>,
) => {
  let url;

  if (ENV.IS_LOCAL) {
    url = `${ENV.API_URL.local}/${ENV.API_REST_URI.MAPPING}.json`;
  } else {
    const mode = process.env['NODE_ENV']!;
    url = `${ENV.API_URL[mode]}/${ENV.API_REST_URI.MAPPING}`;
  }

  fetcher(url, setMappedNames);
};
