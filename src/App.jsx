import React from "react";
import Home from "./Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from './Pages/Service'
import Error from "./Pages/Error";



const App = () => {
  return (

    <>
    <BrowserRouter>
    
      <Routes>
        <Route exact path="/" element = {<Home/>}></Route>
        <Route exact path="/about" element = {<About/>}></Route>
        <Route exact path="/contact" element = {<Contact/>}></Route>
        <Route exact path="/service" element = {<Service/>}></Route>
        <Route exact path="*" element = {<Error/>}></Route>

      </Routes>
     
      </BrowserRouter>
   </>
  );
};

export default App;
