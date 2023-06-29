import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Cards from "./components/cards/Cards";
import Users from "./components/users/Users";
import User from "./components/users/User";

function App() {
  const handleClick = num => {
     console.log(num);
  }
  return (
    <div className="mt-2 ">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element= { <Home /> }/>
          <Route path="/about" element= { <About /> }/>
          <Route path="/cards" element= { <Cards /> }/>
          <Route path="/users">
            <Route index element= { <Users /> } />
            <Route path=":id" element= { <User user='Guada' handleClick={handleClick}/> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
