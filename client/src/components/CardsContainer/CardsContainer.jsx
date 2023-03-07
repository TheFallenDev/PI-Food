import style from "./CardsContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";

const CardsContainer = () => {
  const recipes = useSelector((state) => state.recipes);
  const [pageNumber,setPageNumber] = useState(0);

  const handlePages = (event) => {
    const { name } = event.target;
    name === "next"? setPageNumber(pageNumber+1) : setPageNumber(pageNumber-1);
  }

  return (
    <div>
      <div className={style.cardsContainer}>
        {recipes[pageNumber] && recipes[pageNumber].map((recipe) => (
          <div key={recipe.id}>
            <Card
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              diets={recipe.diets}
            />
          </div>
        ))}
      </div>
        {recipes.length > 0 && 
        <div className={style.pages}>
          {pageNumber > 0 && <button name="previous" onClick={handlePages}>Previous page</button>}
          <p>Page {pageNumber+1} from {recipes.length}</p>
          {pageNumber+1 < recipes.length && <button name="next" onClick={handlePages}>Next page</button>}
        </div>}
    </div>
  );
};

export default CardsContainer;
