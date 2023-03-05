export const GET_RECIPE = "GET_RECIPE";
export const GET_ALL_DIETS = "GET_ALL_DIETS";
export const GET_RECIPES_QUERY = 'GET_RECIPE_QUERY';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';

export const getRecipe = (id) => {
    return async function (dispatch) {
        await fetch(`http://localhost:3001/recipes/${id}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch({type:GET_RECIPE,payload:data})
            });
    };
};

export const getManyRecipes = () => {
    return async function (dispatch) {
        await fetch(`http://localhost:3001/recipes`)
            .then((response) => response.json())
            .then((data) => {
                dispatch({type:GET_RECIPE,payload:data})
            });
    }
}

export const getRecipesQuery = (title) => {
    return async function (dispatch) {
        await fetch(`http://localhost:3001/recipes/?title=${title}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(showLoading(false))
                console.log(data.length);
                dispatch({type:GET_RECIPES_QUERY,payload:data})
            });
    };
};

export const getAllDiets = () => {
    return async function (dispatch) {
        await fetch("http://localhost:3001/diets")
            .then(res => res.json())
            .then((data) => {
                dispatch({type:GET_ALL_DIETS,payload:data})
            });
    };
};

export const showLoading = (status) => {
    return (dispatch) => {
        dispatch({type: TOGGLE_LOADING,payload: status})
    };
};