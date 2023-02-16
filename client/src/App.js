import { useState } from "react";
import { Home, Detail, Form, Landing } from "./views"
import NavBar from "./components/NavBar/NavBar";
import { Route, useLocation } from "react-router-dom";

function App() {

  const [recipes, setRecipes] = useState([]);


  const onSearch = (title) => {
    fetch(`http://localhost:3001/recipes/?title=${title}`)
        .then((response) => response.json())
        .then((data) => {
            if (data[0]){
                setRecipes([data])
            } else{
                window.alert("No se encontró ninguna receta con ese nombre")
            }
        })
};

  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <NavBar/>}
      <Route exact path="/" render={() => <Landing />}/>
      <Route path="/home" render={() => <Home recipes={recipes}/>} />
      <Route path="/detail" render={() => <Detail />} />
      <Route path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
