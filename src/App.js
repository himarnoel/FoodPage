// import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import HeadlineCard from "./components/HeadlineCard";
import Food from "./components/Food";
import Categories from "./components/Categories";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Categories />
    </div>
  );
}

export default App;
