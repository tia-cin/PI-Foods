import { 
    GET_RECIPE_DETAIL, 
    GET_RECIPES, 
    GET_TYPES_OF_DIETS, 
    CREATE_RECIPE,
    FILTER_BY_NAME,
} from '../actions/index'

// estado inicial
let initialState = {
    allRecipess: [],
    recipes: [],
    diets: [],
    name: '',
    order: '',
    recipeDetail: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: payload,
                allRecipess: payload
            }
        case FILTER_BY_NAME: 
            return {
                
            }
        case GET_TYPES_OF_DIETS:
            return {
                ...state,
                diets: payload
            }
        case GET_RECIPE_DETAIL:
            return {
                ...state,
                recipeDetail: payload
            }
        case CREATE_RECIPE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}

export default rootReducer;