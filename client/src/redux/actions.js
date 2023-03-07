export const GET_RECIPE = "GET_RECIPE";
export const GET_ALL_DIETS = "GET_ALL_DIETS";
export const GET_RECIPES_QUERY = 'GET_RECIPE_QUERY';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';

export const getRecipe = (id) => {
    return async function (dispatch) {
        dispatch(showLoading(true))
        await fetch(`http://localhost:3001/recipes/${id}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(showLoading(false))
                dispatch({type:GET_RECIPE,payload:data})
            });
    };
};

export const getRecipesQuery = (title) => {
    return async function (dispatch) {
        dispatch(showLoading(true))
        await fetch(`http://localhost:3001/recipes/?title=${title}`)
            .then((response) => response.json())
            .then((data) => {
                const fractionatedData = []
                for(let i = 0; i<data.length; i+=9){
                    fractionatedData.push(data.slice(i,i+9))
                }
                dispatch(showLoading(false))
                dispatch({type:GET_RECIPES_QUERY,payload:fractionatedData})
            });
    };
};

export const getAllDiets = () => {
    return async function (dispatch) {
        await fetch("http://localhost:3001/diets")
            .then(res => res.json())
            .then((data) => {
                dispatch(showLoading(false))
                dispatch({type:GET_ALL_DIETS,payload:data})
            });
    };
};

export const showLoading = (status) => {
    return (dispatch) => {
        dispatch({type: TOGGLE_LOADING,payload: status})
    };
};