import React from 'react';
import './App.css';
import axios from "axios";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from 'react';
import Search from "./containers/Search";
import Saved from "./containers/Saved";
import NoMatch from "./containers/NoMatch";
import Wrapper from './components/Wrapper';

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);




  return (
    <Router>
      <Wrapper>
     <Switch>
       <Route exact path="/" component={Search} />
       <Route exact path="/books" component={Saved} />
       <Route component={NoMatch} />
     </Switch>
     </Wrapper>
   </Router>
  );
}

export default App;
