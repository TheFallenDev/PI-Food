import Searchbar from "../../components/Searchbar/Searchbar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css"

const Home = (props) => {
    return(
        <div className={style.home}>
            <Searchbar onSearch={props.onSearch}/>
            <CardsContainer recipes={props.recipes}/>
        </div>
    )
};

export default Home;