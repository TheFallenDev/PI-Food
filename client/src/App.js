import { Home, Detail, Form, Landing, Error } from "./views"
import NavBar from "./components/NavBar/NavBar";
import { Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDiets } from "./redux/actions"
import style from "./App.css"

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(getAllDiets());
  },[dispatch]);

  const location = useLocation();

  return (
    <div className="app">
      {location.pathname !== '/' && <NavBar/>}
      <Route exact path="/" render={() => <Landing />}/>
      <Route path="/home" render={() => <Home />} />
      <Route path="/recipe/:id" render={() => <Detail />} />
      <Route path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
