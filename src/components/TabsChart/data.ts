import { KeyOfTabs, Tab } from '@customTypes/common';

export const tabsData: Record<KeyOfTabs, Tab[]> = {
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

export const playTabsData: Record<KeyOfTabs, boolean> = {
  week: true,
  team: true,
};

export const selectedTabData: Record<KeyOfTabs, number> = {
  week: 0,
  team: 0,
};
