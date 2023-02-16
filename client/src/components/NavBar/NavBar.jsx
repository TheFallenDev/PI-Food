import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = (props) => {
    return(
        <div className={style.container}>
            <Link to="/home">HOME</Link>
            <Link to="/create">CREATE RECIPE</Link>
        </div>
    )
}

export default NavBar;