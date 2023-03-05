import Searchbar from "../../components/Searchbar/Searchbar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Loader from "../../components/Loader/Loader";
import Filters from "../../components/Filters/Filters";
import { useSelector } from "react-redux";
import style from "./Home.module.css";

const Home = () => {
  const loading = useSelector((state) => state.loading);
  

  return (
    <div className={style.container}>
      <div className={style.smallContainer}>
        <Searchbar />
        <Filters />
      </div>
      <CardsContainer />
      {loading && <Loader />}
    </div>
  );
};

export default Home;
