import style from "./Card.module.css"

const Card = (props) => {
    return(
        <div className={style.card}>
            <img src={props.image} alt={props.title}/>
            <h2>{props.title}</h2>
            {props.diets && props.diets.map(diet => (
                <p>{diet}</p>
            ))}
        </div>
    )
}

export default Card;