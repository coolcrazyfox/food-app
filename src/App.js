import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Header/Main/Hero";
import HeadlineCards from "./components/Header/Main/HeadlineCards";
import Food from "./components/FoodList/Food";
import Category from "./components/Footer/Category";
import Contact from "./components/Footer/Contact";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <Contact />
    </div>
  );
}

export default App;
