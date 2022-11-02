import {
  GET_RECIPES,
  GET_TYPES_OF_DIETS,
  GET_RECIPE_DETAIL,
  CREATE_RECIPE,
  FILTER_BY_NAME,
  FILTER_BY_DIET,
  ORDER_RECIPES,
} from "../types";

const axios = require("axios");

// unir ruta /recipes
export function getRecipes() {
  // console.log('getrecipes' +name, order, page,diet)
  return async (dispatch) => {
    try {
      let recipes = await axios(`http://localhost:3001/recipes`);
      return dispatch({
        type: GET_RECIPES,
        payload: recipes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// unir ruta /types
export function getDiets() {
  return async (dispatch) => {
    try {
      let diets = await axios("http://localhost:3001/types");
      return dispatch({
        type: GET_TYPES_OF_DIETS,
        payload: diets.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// unir ruta /recipes/:idRecipes
export function getRecipeDetail(id) {
  console.log(id);
  return async (dispatch) => {
    try {
      let recipeDetail = await axios(`http://localhost:3001/recipes/${id}`);
      return dispatch({
        type: GET_RECIPE_DETAIL,
        payload: recipeDetail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// unir ruta /recipe
export function createRecipe(payload) {
  return async (dispatch) => {
    try {
      let newRecipe = await axios("http://localhost:3001/recipe", payload);
      return dispatch({
        type: CREATE_RECIPE,
        payload: newRecipe.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// unir ruta /recipes?name=...
export function filterByName(payload) {
  return async (dispatch) => {
    try {
      let recipe = await axios(`http://localhost:3001/recipes?name=${payload}`);
      return dispatch({
        type: FILTER_BY_NAME,
        payload: recipe.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// crear action para filtrar por diets
export function filterByDiets(payload) {
  return {
    type: FILTER_BY_DIET,
    payload: payload,
  };
}

// crear action para ordenar recipes
export function orderRecipes(payload) {
  return {
    type: ORDER_RECIPES,
    payload: payload,
  };
}
