import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.cardContainer}>
      <figure className={style.image}>
        <img src={props.image} alt={props.title} />
      </figure>
      <div className={style.cardContent}>
        <Link className={style.title} to={`/recipe/${props.id}`}>
          {props.title}
        </Link>
      </div>
    </div>
  );
};

export default Card;
