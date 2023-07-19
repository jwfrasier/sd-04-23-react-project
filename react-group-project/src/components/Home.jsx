import React from "react";
import "../App.css";

const Home = ({ isSelected, setIsSelected }) => {
  const handleLinkClick = (buttonLink) => {
    setIsSelected(buttonLink);
  };
  console.log(isSelected);
  return (
    <div className="home-page">
      <div className="Buttons">
        <button onClick={() => handleLinkClick("Tournaments")}>
          Tournaments
        </button>
        <button onClick={() => handleLinkClick("Players")}>Players</button>
      </div>
    </div>
  );
};

export default Home;
