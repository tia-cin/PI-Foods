import {
  GET_COUNTRIES,
  GET_ACTIVITIES,
  GET_COUNTRY_INFO,
  CREATE_ACTIVITY,
  ORDER_COUNTRIES_POPULATION,
  ORDER_COUNTRIES_NAME,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  SEARCH_COUNTRY,
  ActionTypes,
  CountryType,
  ActivityType,
  GET_CONTINENTS,
} from "../types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";
import axios from "axios";

export const getCountries = (): ThunkAction<
  void,
  RootState,
  null,
  ActionTypes
> => {
  return async (dispatch) => {
    axios
      .get("http://localhost:3001/countries")
      .then(async (r) =>
        dispatch({
          type: GET_COUNTRIES,
          payload: (await r).data,
        })
      )
      .catch((error) => console.log(error));
  };
};

export const getActivities = (): ThunkAction<
  void,
  RootState,
  null,
  ActionTypes
> => {
  return async (dispatch) => {
    try {
      const activities = await axios.get("http://localhost:3001/activity");
      return dispatch({
        type: GET_ACTIVITIES,
        payload: (await activities).data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCountryInfo = (
  id: string
): ThunkAction<void, RootState, null, ActionTypes> => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/countries/" + id)
      .then((r) =>
        dispatch({
          type: GET_COUNTRY_INFO,
          payload: r.data,
        })
      )
      .catch((error) => console.log(error));
  };
};

export const createActivity = (
  payload: ActivityType
): ThunkAction<void, RootState, null, ActionTypes> => {
  return async (dispatch) => {
    try {
      const newActivity = await axios.post(
        "http://localhost:3001/activity",
        payload
      );
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: newActivity.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderCountriesPopulation = (
  payload: string
): ThunkAction<void, RootState, null, ActionTypes> => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: ORDER_COUNTRIES_POPULATION,
        payload: payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderCountriesName = (
  payload: string
): ThunkAction<void, RootState, null, ActionTypes> => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: ORDER_COUNTRIES_NAME,
        payload: payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterContinent = (
  payload: string
): ThunkAction<void, RootState, null, ActionTypes> => {
  return async (dispatch) => {
    try {
      const res = axios.get(
        `http://localhost:3001/countries?filter=${payload}`
      );
      return dispatch({
        type: FILTER_CONTINENT,
        payload: (await res).data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterActivity = (
  payload: string
): ThunkAction<void, RootState, null, ActionTypes> => {
  return async (dispatch) => {
    try {
      const res = axios.get(
        `http://localhost:3001/countries?filter=${payload}`
      );
      return dispatch({
        type: FILTER_ACTIVITY,
        payload: (await res).data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchCountry = (
  payload: string
): ThunkAction<void, RootState, null, ActionTypes> => {
  return async (dispatch) => {
    try {
      console.log(payload);
      const countries = await axios.get(
        "http://localhost:3001/countries?name=" + payload
      );
      return dispatch({
        type: SEARCH_COUNTRY,
        payload: (await countries).data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getContinents = (): ThunkAction<
  void,
  RootState,
  null,
  ActionTypes
> => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3001/continents");
      return dispatch({
        type: GET_CONTINENTS,
        payload: (await res).data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
