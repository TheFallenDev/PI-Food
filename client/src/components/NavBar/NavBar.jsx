import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = (props) => {
    return(
        <div className={style.container}>
            <Link className={style.link} to="/home">HOME</Link>
            <Link className={style.link} to="/create">CREATE RECIPE</Link>
        </div>
    )
}

export default NavBar;