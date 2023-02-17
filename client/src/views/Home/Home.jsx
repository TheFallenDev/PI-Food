import Searchbar from "../../components/Searchbar/Searchbar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

const Home = (props) => {
    return(
        <div>
            <Searchbar onSearch={props.onSearch}/>
            <CardsContainer recipes={props.recipes}/>
        </div>
    )
};

export default Home;