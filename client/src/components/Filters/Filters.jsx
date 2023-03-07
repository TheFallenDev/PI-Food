import style from "./Filters.module.css";
import { useSelector } from "react-redux";

const Filters = () => {
  const diets = useSelector((state) => state.diets);
  const changeHandler = (event) => {
    const { value } = event.target;
    
  }
  return (
    <div className={style.container}>
      <h3>Order by</h3>
      <label htmlFor="dietSelector">Filter by diet</label>
      <select name="dietSelector" onChange={changeHandler} defaultValue={"default"}>
        <option value="default" disabled>Choose one</option>
        {diets && diets.map((diet) => <option value={diet.id} key={diet.id}>{diet.name}</option>)}
      </select>
    </div>
  );
};

export default Filters;
