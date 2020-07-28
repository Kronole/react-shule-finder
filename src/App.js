import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Schools from "./pages/Schools";
import BoysSchools from "./pages/BoysSchools";
import Error from "./pages/Error";
import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <> 
    <Navbar/>
    <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/schools/" component={Schools} />
   <Route exact path="/schools/:bob" component={BoysSchools} />
    <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
