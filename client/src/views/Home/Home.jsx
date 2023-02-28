import Searchbar from "../../components/Searchbar/Searchbar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useSelector } from "react-redux";
import style from "./Home.module.css"

const Home = (props) => {
    const diets = useSelector(state=>state.diets);

    return(
        <div className={style.home}>
            <Searchbar onSearch={props.onSearch}/>
            <CardsContainer recipes={props.recipes}/>
        </div>
    )
};

export default Home;