import { GET_RECIPE, GET_ALL_DIETS } from "./actions"

const initialState = {
    recipe: {},
    diets: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPE: 
            return {...state, recipe: action.payload};
        case GET_ALL_DIETS:
            return {...state, diets:action.payload};
        default:
            return {...state};
    }
}

export default rootReducer;