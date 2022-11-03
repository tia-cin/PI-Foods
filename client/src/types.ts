export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRY_INFO = "GET_COUNTRY_INFO";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const ORDER_COUNTRIES_POPULATION = "ORDER_COUNTRIES";
export const ORDER_COUNTRIES_NAME = "ORDER_COUNTRIES_NAME";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const GET_CONTINENTS = "GET_CONTINENTS";

export interface TitlesProps {
  title: string;
  subtitle: string;
}

export interface PaginationProps {
  pages: number;
  total: number;
  handlePag: (pageNum: number) => void;
}

export interface CardProps {
  name: string;
  activities: ActivityType[];
  flag: string;
  id: string;
}

export interface ButtonProps {
  style?: string;
  text?: string;
  handle?: any;
}

export interface InputsProps {
  select?: boolean;
  text: string;
  values: any;
  onChange: () => void;
  name?: string;
}

export interface CountryType {
  id: string;
  name: string;
  flag: string;
  continent: string;
  capital: string;
  region: string;
  subregion: string;
  area: string;
  status: string;
  population: string | number;
  activities: ActivityType[];
}

export interface ActivityType {
  id?: number;
  name: string;
  difficulty: number;
  duration: number;
  season: string;
  countries?: CountryType[];
}

export interface AlertType {
  text: string;
  type: string;
}

export interface StateType {
  countries: CountryType[];
  activities: ActivityType[];
  detail: CountryType | null;
  continents: String[];
}

interface GetCountriesAction {
  type: typeof GET_COUNTRIES;
  payload: CountryType[];
}

interface GetActivitiesAction {
  type: typeof GET_ACTIVITIES;
  payload: ActivityType[];
}

interface GetCountryInfoAction {
  type: typeof GET_COUNTRY_INFO;
  payload: CountryType;
}

interface CreateActivityAction {
  type: typeof CREATE_ACTIVITY;
  payload: ActivityType;
}

interface OrderCountriesPopulationAction {
  type: typeof ORDER_COUNTRIES_POPULATION;
  payload: string;
}

interface OrderCountriesNameAction {
  type: typeof ORDER_COUNTRIES_NAME;
  payload: string;
}

interface FilterContinentAction {
  type: typeof FILTER_CONTINENT;
  payload: string;
}

interface FilterActivityAction {
  type: typeof FILTER_ACTIVITY;
  payload: string;
}

interface SearchCountryAction {
  type: typeof SEARCH_COUNTRY;
  payload: CountryType[];
}

interface GetContinents {
  type: typeof GET_CONTINENTS;
  payload: String[];
}

export type ActionTypes =
  | GetCountriesAction
  | GetActivitiesAction
  | GetCountryInfoAction
  | CreateActivityAction
  | OrderCountriesPopulationAction
  | OrderCountriesNameAction
  | FilterContinentAction
  | FilterActivityAction
  | SearchCountryAction
  | GetContinents;
