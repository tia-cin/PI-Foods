export const GET_RECIPES = "GET_RECIPES";
export const GET_TYPES_OF_DIETS = "GET_TYPES_OF_DIETS";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const ORDER_RECIPES = "ORDER_RECIPES";

export interface RecipeType {}

export interface Diet {}

export interface StateType {
  allRecipes: [];
  recipes: [];
  diets: [];
  recipeDetail: {};
}
