import { useSelector } from "react-redux"

const Detail = () => {
    const recipe = useSelector(state=>state.recipe)
    return(
        <div>
            <img src={recipe.image} alt={recipe.title} />
            <h2>Nombre: {recipe.title}</h2>
            <p>Resumen: {recipe.summary}</p>
            <p>Health Score: {recipe.healthScore}</p>
            <h5>Tipo de plato</h5>
            {recipe.dishTypes && recipe.dishTypes.map(type => (
                <p>{type}</p>
            ))}
            <h5>Dietas</h5>
            {recipe.diets && recipe.diets.map(diet =>(
                <p>{diet}</p>
            ))}
            <p>Instrucciones: {recipe.instructions}</p>
        </div>
    )
};

export default Detail;