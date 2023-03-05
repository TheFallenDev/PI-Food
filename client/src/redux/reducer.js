import { GET_RECIPE, GET_ALL_DIETS, GET_RECIPES_QUERY, TOGGLE_LOADING } from "./actions"

const initialState = {
    recipe: {},
    recipes: [],
    diets: [],
    loading: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPE: 
            return {...state, recipe: action.payload};
        case GET_RECIPES_QUERY:
            return {...state, recipes: action.payload};
        case GET_ALL_DIETS:
            return {...state, diets:action.payload};
        case TOGGLE_LOADING:
            return {...state, loading:action.payload}
        default:
            return {...state};
    }
}

export default rootReducer;