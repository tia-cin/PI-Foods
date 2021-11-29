// estado inicial
let initialState = {
    recipes: [],
    diets: [],
    recipeDetail: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: payload
            }
        case 'GET_TYPES_OF_DIETS':
            return {
                ...state,
                diets: payload
            }
        case 'GET_RECIPE_DETAIL':
            return {
                ...state,
                recipeDetail: payload
            }
        case 'CREATE_RECIPE':
            return {
                ...state
            }
        default:
            return state;
    }
}

export default rootReducer;