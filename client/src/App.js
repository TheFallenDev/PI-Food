import { Home, Detail, Form, Landing } from "./views"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Landing />}/>
      <Route path="/home" render={() => <Home />} />
      <Route path="/detail" render={() => <Detail />} />
      <Route path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
