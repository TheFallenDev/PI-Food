import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.cardContainer}>
      <figure className={style.image}>
        <img src={props.image} alt={props.title} />
      </figure>
      <div className={style.cardContent}>
        <h2>{props.title}</h2>
        <p>{props.diets}</p>
      </div>
      <Link className={style.read} to={`/recipe/${props.id}`}>Read more</Link>
    </div>
  );
};

export default Card;
