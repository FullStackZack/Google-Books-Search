import React from "react";
import "./App.css";
import Searchpage from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";

function App() {
  console.log('works');

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Searchpage} />
          <Route exact path='/saved' component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;