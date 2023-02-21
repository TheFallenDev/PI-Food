export const GET_RECIPE = "GET_RECIPE";

export const getRecipe = (id) => {
    return async function (dispatch) {
        await fetch(`http://localhost:3001/recipes/${id}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch({type:GET_RECIPE,payload:data})    
            });
    }
}