export const GET_RECIPE = "GET_RECIPE";
export const GET_ALL_DIETS = "GET_ALL_DIETS";

export const getRecipe = (id) => {
    return async function (dispatch) {
        await fetch(`http://localhost:3001/recipes/${id}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch({type:GET_RECIPE,payload:data})    
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