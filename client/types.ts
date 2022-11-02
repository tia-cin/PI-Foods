export const GET_RECIPES = "GET_RECIPES";
export const GET_TYPES_OF_DIETS = "GET_TYPES_OF_DIETS";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const ORDER_RECIPES = "ORDER_RECIPES";

export interface RecipeType {
  id: number;
  name: string;
  summary: string;
  score: number;
  health_score: number;
  instructions: string;
  diets: DietType[];
}

export interface DietType {
  id: number;
  name: string;
  recipe?: RecipeType[] | RecipeType;
}

export interface StateType {
  allRecipes: RecipeType[];
  recipes: RecipeType[];
  diets: DietType[];
  recipeDetail: RecipeType | null;
}

interface GetRecipesAction {
  type: typeof GET_RECIPES;
  payload: RecipeType[];
}

interface GetDietsAction {
  type: typeof GET_TYPES_OF_DIETS;
  payload: DietType[];
}

interface GetRecipeDetailAction {
  type: typeof GET_RECIPE_DETAIL;
  payload: RecipeType;
}

interface CreateRecipeAction {
  type: typeof CREATE_RECIPE;
  payload: RecipeType;
}

interface FilterByNameAction {
  type: typeof FILTER_BY_NAME;
  payload: RecipeType[];
}

interface FilterByDietAction {
  type: typeof FILTER_BY_DIET;
  payload: DietType;
}

interface OrderRecipesAction {
  type: typeof ORDER_RECIPES;
  payload: RecipeType[] | string;
}

export type ActionTypes =
  | GetRecipesAction
  | GetDietsAction
  | GetRecipeDetailAction
  | CreateRecipeAction
  | FilterByNameAction
  | FilterByDietAction
  | OrderRecipesAction;
