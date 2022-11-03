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
  return (dispatch) => {
    axios
      .get("http://localhost:3001/countries")
      .then((r) =>
        dispatch({
          type: GET_COUNTRIES,
          payload: r.data,
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
        payload: activities.data,
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
  payload: CountryType
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
      return dispatch({
        type: FILTER_CONTINENT,
        payload: payload,
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
      return dispatch({
        type: FILTER_ACTIVITY,
        payload: payload,
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
      const countries = await axios.get(
        "http://localhost:3001/countries?name=" + payload
      );
      return dispatch({
        type: SEARCH_COUNTRY,
        payload: countries.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
