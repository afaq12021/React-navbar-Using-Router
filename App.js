import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Error from "./Error";
import Menu from "./Menu";
import User from "./User";
import Search from "./Search";

import "./index.css"

const App=()=>{
  return(
    <>
    <Menu />
    <Routes>
    <Route exact path="/" Component={Home}/>
    <Route exact path="/about" Component={About}/>
    <Route exact path="/contact" Component={Contact}/>
    <Route exact path="/services" Component={Services}/>
    <Route exact  path="/search" Component={Search} />
    <Route path="/user/:fname" Component={User} />
    
    <Route  Component={Error} />
    </Routes>


    </>
  );
}

export default App;
