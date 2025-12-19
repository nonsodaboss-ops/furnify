import React, { useState } from "react";
import Nav from "./components/Nav";
import { furnitureItems, reviews, roomDecor } from "./utilities/data";
import Item from "./components/Item";
import Room from "./components/Room";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex bg-black justify-center space-x-10 p-10">
      <div className="p-5 bg-white w-270 relative">
        <Nav />
        <Routes>
          <Route path='/' element ={<Home />}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
