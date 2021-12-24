import { KeyOfTabs, Tab } from '@customTypes/common';

type IndexTypeOfTabs = {
  [index in KeyOfTabs]: Tab[];
};

export const tabsData: IndexTypeOfTabs = {
  week: [
    {
      id: 0,
      value: 'total',
      title: '종합',
      selected: true,
    },
    {
      id: 1,
      value: 'critical',
      title: '심각',
      selected: false,
    },
    {
      id: 2,
      value: 'trouble',
      title: '경고',
      selected: false,
    },
  ],
  team: [
    {
      id: 0,
      value: 'week',
      title: '주',
      selected: true,
    },
    {
      id: 1,
      value: 'month',
      title: '월',
      selected: false,
    },
  ],
};

type IndexTypeOfPlay = {
  [index in KeyOfTabs]: boolean;
};
type IndexTypeOfSelected = {
  [index in KeyOfTabs]: number;
};

export const playTabsData: IndexTypeOfPlay = {
  week: true,
  team: true,
};

export const selectedTabData: IndexTypeOfSelected = {
  week: 0,
  team: 0,
};
