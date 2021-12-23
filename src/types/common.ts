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

// Chart
export interface ChartTabQuery {
  tab: string;
}

export type ChartParam = SearchInputs | ChartTabQuery;
