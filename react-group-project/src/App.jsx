import "./App.css";
import Component1 from "./components/team1/Component1";
import Component2 from "./components/team2/Component2";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://mxakcphctxajogkuteth.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDE0NTg3OCwiZXhwIjoxOTM1NzIxODc4fQ.0qra9FQYuKCkgMteZ0ZAe2wrMx2v1IFGwsU60Oi4KwY"
);

function App() {
  useEffect(() => {
    const fetchEsportsData = async () => {
      const { data: esports, error } = await supabase.from("esports").select();
      console.log(esports);
    };
    fetchEsportsData();
  });
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
