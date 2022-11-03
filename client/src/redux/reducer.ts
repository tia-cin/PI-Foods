import {
  CREATE_ACTIVITY,
  GET_COUNTRY_INFO,
  FILTER_ACTIVITY,
  FILTER_CONTINENT,
  GET_ACTIVITIES,
  GET_COUNTRIES,
  ORDER_COUNTRIES_NAME,
  ORDER_COUNTRIES_POPULATION,
  SEARCH_COUNTRY,
  StateType,
  ActionTypes,
  GET_CONTINENTS,
} from "../types";

const initialState: StateType = {
  countries: [],
  activities: [],
  detail: null,
  continents: [],
};

export const reducer = (
  state = initialState,
  { type, payload }: ActionTypes
): StateType => {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    case GET_COUNTRY_INFO:
      return {
        ...state,
        detail: payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
      };
    case ORDER_COUNTRIES_POPULATION:
      let sortedCountriesPopulation =
        payload === "min"
          ? state.countries.sort((a, b) => {
              if (a.population > b.population) return 1;
              if (b.population > a.population) return -1;
              else return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.population < b.population) return 1;
              if (b.population < a.population) return -1;
              else return 0;
            });
      return {
        ...state,
        countries: sortedCountriesPopulation,
      };
    case ORDER_COUNTRIES_NAME:
      let sortedCountriesName =
        payload === "asc"
          ? state.countries.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              else return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (b.name < a.name) return -1;
              else return 0;
            });
      return {
        ...state,
        countries: sortedCountriesName,
      };
    case FILTER_CONTINENT:
      return {
        ...state,
        countries: payload,
      };
    case FILTER_ACTIVITY:
      return {
        ...state,
        countries: payload,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        countries: payload,
      };
    case GET_CONTINENTS:
      return {
        ...state,
        continents: payload,
      };
    default:
      return state;
  }
};
