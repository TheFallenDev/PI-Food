import { Home, Detail, Form, Landing, Error } from "./views"
import NavBar from "./components/NavBar/NavBar";
import { Route, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([])
  const location = useLocation();

  const onSearch = (title) => {
    fetch(`http://localhost:3001/recipes/?title=${title}`)
      .then((response) => response.json())
      .then((data) => {
        if(data.length > 0) {
          setRecipes(data);
        } else {
          window.alert('No se encontraron recetas con ese nombre');
        }
      });
  };

  return (
    <div>
      {location.pathname !== '/' && <NavBar/>}
      <Route exact path="/" render={() => <Landing />}/>
      <Route path="/home" render={() => <Home onSearch={onSearch} recipes={recipes}/>} />
      <Route path="/detail" render={() => <Detail />} />
      <Route path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
