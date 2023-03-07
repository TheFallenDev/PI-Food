import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getRecipe } from "../../redux/actions";
import Loader from "../../components/Loader/Loader";
import style from "./Detail.module.css"

const Detail = () => {
  const { id } = useParams();
  const recipe = useSelector((state) => state.recipe);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipe(id))
  },[dispatch,id])

  return (
    <div className={style.container}>
      <figure className={style.imageContainer}>
        <img src={recipe.image} alt={recipe.title} />
      </figure>
      <h1 className={style.title}>{recipe.title}</h1>
      <p className={style.summary} dangerouslySetInnerHTML={{__html: recipe.summary}}/>
      <h3>Health Score: {recipe.healthScore}</h3>
      <div className={style.smallContainer}>
        <h2>Dish types</h2>
        {recipe.dishTypes && recipe.dishTypes.map((type) => <p className={style.dishType} key={type}>{type[0].toUpperCase() + type.slice(1)}</p>)}
      </div>
      <div className={style.smallContainer}>
      <h2>Diets</h2>
      {recipe.diets && recipe.diets.map((diet) => <p className={style.diet} key={diet}>{diet[0].toUpperCase() + diet.slice(1)}</p>)}
      </div>
      <div className={style.smallContainer}>
      <h2>Instructions</h2>
      <p dangerouslySetInnerHTML={{__html: recipe.instructions}}/>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Detail;
