// unir ruta /recipes 
export function getRecipes() {
    return async (dispatch) => {
        let recipes = await fetch('http://localhost:3001/recipes')
        return dispatch({
            type: 'GET_RECIPES',
            payload: recipes.data,
        })
    }
}

// unir ruta /types
export function getDiets() {
    return async (dispatch) => {
        let diets = await fetch('http://localhost:3001/types')
        return dispatch({
            type: 'GET_TYPES_OF_DIETS',
            payload: diets.data,
        })
    }
}

// unir ruta /recipes/:idRecipes
export function getRecipeDetail(idRecipe) {
    return async (dispatch) => {
        let recipeDetail = await fetch('http://localhost/recipes/' + idRecipe)
        return dispatch({
            type: 'GET_RECIPE_DETAIL',
            payload: recipeDetail.data
        })
    }
}

// unir ruta /recipe
export function createRecipe(payload) {
    return async (dispatch) => {
        let newRecipe = await fetch('http://localhost/recipe', payload)
        return dispatch({
            type: 'CREATE_RECIPE',
            payload: newRecipe.data
        })
    }
}