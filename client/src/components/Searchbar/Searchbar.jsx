import { useState } from "react"

const Searchbar = (props) => {
    const [title, setTitle] = useState("");

    const handleInputChange = (event)=>{
        setTitle(event.target.value)
    };
 
    return(
        <div>
            <input type="search" value={title} onChange={handleInputChange}/>
            <button onClick={() => props.onSearch(title)}>Buscar</button>
        </div>       
    )
}

export default Searchbar;