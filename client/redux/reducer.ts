import {
  GET_RECIPE_DETAIL,
  GET_RECIPES,
  GET_TYPES_OF_DIETS,
  CREATE_RECIPE,
  FILTER_BY_NAME,
  FILTER_BY_DIET,
  ORDER_RECIPES,
  StateType,
  ActionTypes,
  RecipeType,
} from "../types";

// estado inicial
let initialState: StateType = {
  allRecipes: [],
  recipes: [],
  diets: [],
  recipeDetail: null,
};

const rootReducer = (
  state = initialState,
  { type, payload }: ActionTypes
): StateType => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
        allRecipes: payload,
      };
    case FILTER_BY_DIET:
      let recipes = state.allRecipes.filter((r: RecipeType) =>
        r.diets.includes(payload)
      );
      return {
        ...state,
        recipes: recipes,
      };
    case GET_TYPES_OF_DIETS:
      return {
        ...state,
        diets: payload,
      };
    case GET_RECIPE_DETAIL:
      return {
        ...state,
        recipeDetail: payload,
      };
    case CREATE_RECIPE:
      return {
        ...state,
      };
    case ORDER_RECIPES:
      let sortedRecipes =
        payload === "asc"
          ? state.allRecipes.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              else return 0;
            })
          : state.allRecipes.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              else return 0;
            });
      return {
        ...state,
        recipes: sortedRecipes,
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        recipes: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
