import "./App.css";
import Component1 from "./components/team1/Component1";
import Component2 from "./components/team2/Component2";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [isSelected, setIsSelected] = useState("Home");
  return (
    <div>
      <Nav isSelected={isSelected} setIsSelected={setIsSelected} />

      {isSelected === "Home" && <Home />}
      {isSelected === "Team 1" && <Component1 />}
      {isSelected === "Team 2" && <Component2 />}
    </div>
  );
}

export default App;
