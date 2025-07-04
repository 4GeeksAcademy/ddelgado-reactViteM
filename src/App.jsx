import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Card from "./components/Card"
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";


export const App = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="listCard">
        <Card /><Card /><Card /><Card />
      </div>
      <Footer />
    </>
  );
}

export default App;

