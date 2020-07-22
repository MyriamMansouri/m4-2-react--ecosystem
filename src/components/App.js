import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import GlobalStyles from './GlobalStyles'
import About from "./About";
import ItemDetails from "./ItemDetails";

const App = (props) => {
  return (
    
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/"><Homepage /></Route>
        <Route  path="/about"><About/></Route>
        <Route  path="/items/:itemId"><ItemDetails/></Route>
      </Switch>
    </Router>
  );
};

export default App;
