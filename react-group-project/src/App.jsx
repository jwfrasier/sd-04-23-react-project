/** @format */

import "./App.css";
//import Component1 from "./components/team1/Component1";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";

import Tournament from "./components/team2/Tournament";
import Players from "./components/team2/players";

function App() {
  const tournamentImages = [
    {
      image:
        "https://www.esports.net/wp-content/uploads/2020/01/what-is-esports.jpg",
    },
    {
      image:
        "https://www.bdcnetwork.com/sites/default/files/Opener%20Image%20copy.jpg",
    },
    {
      image:
        "https://assets.dmagstatic.com/wp-content/uploads/2018/04/esports-stadium.jpg",
    },
    {
      image:
        "https://www.hollywoodreporter.com/wp-content/uploads/2019/09/gettyimages-1006862844-h_2019.jpg?w=1296",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5a8279c1e9bfdf6753e7366c/1653080780722-NDQ9G6ASSJ762ET6YI2P/ARENAWIDE-MOCKUP_1920X1280_72DPI.png?format=2500w",
    },
  ];

  const [isSelected, setIsSelected] = useState("Home");
  return (
    <div>
      <Nav isSelected={isSelected} setIsSelected={setIsSelected} />

      {isSelected === "Home" && (
        <Home isSelected={isSelected} setIsSelected={setIsSelected} />
      )}
      {isSelected === "Tournaments" && (
        <Tournament tournamentImages={tournamentImages} />
      )}
      {isSelected === "Players" && <Players />}
    </div>
  );
}

export default App;
