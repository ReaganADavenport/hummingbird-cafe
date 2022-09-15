import React from 'react'

import './App.css';

import Nav from "./Components/Navbar/nav";
import Home from "./Components/Home/home";
import Menu from "./Components/Menu/menu";


function App() {

  return(
    <div className="Body">
      <Nav></Nav>
      <Home></Home>
      <Menu></Menu>
    </div>
)
}

export default App;