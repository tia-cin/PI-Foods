export const GET_RECIPES = 'GET_RECIPES'
export const GET_TYPES_OF_DIETS = 'GET_TYPES_OF_DIETS'
export const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL'
export const CREATE_RECIPE = 'CREATE_RECIPE'
export const FILTER_BY_NAME = 'FILTER_BY_NAME'
const axios = require('axios')

// unir ruta /recipes 
export function getRecipes({ name, order, page, diet }) {
    // console.log('getrecipes' +name, order, page,diet)
    return async (dispatch) => {
        let recipes = await axios(`http://localhost:3001/recipes?name=${name ? name : ''}&order=${order ? order : ''}&page=${page ? page : 1}&diets=${diet}` )
        return dispatch({
            type: GET_RECIPES,
            payload: recipes.data,
        })
    }
}

// unir ruta /types
export function getDiets() {
    return async (dispatch) => {
        let diets = await axios('http://localhost:3001/types')
        return dispatch({
            type: GET_TYPES_OF_DIETS,
            payload: diets.data,
        })
    }
}

// unir ruta /recipes/:idRecipes
export function getRecipeDetail(idRecipe) {
    return async (dispatch) => {
        let recipeDetail = await axios('http://localhost/recipes/' + idRecipe)
        return dispatch({
            type: GET_RECIPE_DETAIL,
            payload: recipeDetail.data
        })
    }
}

// unir ruta /recipe
export function createRecipe(payload) {
    return async (dispatch) => {
        let newRecipe = await axios('http://localhost/recipe', payload)
        return dispatch({
            type: CREATE_RECIPE,
            payload: newRecipe.data
        })
    }
}

