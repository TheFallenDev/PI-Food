import style from "./CardsContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = (props) => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div className={style.cardsContainer}>
      {recipes && recipes.map((recipe) => (
        <div key={recipe.id}>
          <Card
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
