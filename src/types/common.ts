// Inputs
export interface SearchInputs {
  team: string;
  service: string;
  start_date: string;
  end_date: string;
}
export interface Relation {
  TEAM_NAME: string;
  SERVICE_NAME: string;
}
export interface MappedRelation {
  team: string;
  service: string[];
  selected: boolean;
}

// Tab
export type KeyOfTabs = 'week' | 'team';
export interface Tab {
  id: number;
  value: string;
  title: string;
  selected: boolean;
}

// Chart
export interface ChartTabQuery {
  tab: string;
}

export type ChartParam = SearchInputs | ChartTabQuery;
export interface ChartData {
  TEAM_NAME?: string;
  A?: number;
  B?: number;
  TROUBLE?: number;
  CRITICAL?: number;
  WEEK?: string;
  THIS_WEEK?: string;
  THIS_CNT?: number;
  LAST_CNT?: number;
  DAY?: string;
}
export interface TeamName {
  id: number;
  value: string;
  title: string;
  order: number;
}

// Grid
export interface GridData {
  NO?: number;
  SERVICE_NAME?: string;
  TEAM_NAME?: string;
  CNT?: number;
  ALARMSEVERITY?: string;
  ALARM_NAME?: string;
  DAY?: number;
  THIS_WEEK?: number;
  LAST_WEEK?: number;
  INC?: number;
  CONDITIONLOGTEXT?: string;
  IP?: string;
}
