import React from 'react'

import './App.css';

import Nav from "./Components/Navbar/nav";
import Home from "./Components/Home/home";


function App() {

  return(
    <div className="Body">
      <Nav></Nav>
      <Home></Home>
    </div>
)
}

export default App;