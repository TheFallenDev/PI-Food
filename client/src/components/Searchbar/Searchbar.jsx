import { useState } from "react"
import { useDispatch } from "react-redux";
import { getRecipesQuery,showLoading } from "../../redux/actions";
import style from "./Searchbar.module.css"

const Searchbar = (props) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    
    const handleInputChange = (event)=>{
        setTitle(event.target.value)
    };

    const getRecipes = () => {
        dispatch(showLoading(true))
        dispatch(getRecipesQuery(title))
    }
 
    return(
        <div className={style.container}>
            <input type="search" value={title} onChange={handleInputChange}/>
            <button onClick={getRecipes}>Search</button>
        </div>
    )
}

export default Searchbar;