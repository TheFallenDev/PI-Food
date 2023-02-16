import style from "./CardsContainer.module.css"
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = (props) => {
    const recipes = useSelector(state => state.recipes);

    return(
        <div className={style.container}>
            {recipes.map(recipe => (
                <Card 
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