import style from "./CardsContainer.module.css"
import Card from "../Card/Card";

const CardsContainer = (props) => {

    return(
        <div className={style.container}>
            {props.recipes.map(recipe => (
                <Card 
                    key = {recipe.id}
                    id = {recipe.id}
                    title = {recipe.title}
                    image = {recipe.image}
                    diets = {recipe.diets}
                />
            ))}
        </div>
    )
}

export default CardsContainer;