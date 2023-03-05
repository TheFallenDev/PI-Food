import style from "./Filters.module.css";
import { useSelector } from "react-redux";

const Filters = () => {
  const diets = useSelector((state) => state.diets);
  return (
    <div className={style.container}>
      <h3>Filters</h3>
    </div>
  );
};

export default Filters;
