import "./App.css";
import Component1 from "./components/team1/Component1";
import Component2 from "./components/team2/Component2";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

import supabaseConfig from "../../supabaseConfig";

function App() {
  const { supabaseUrl, supabaseKey } = supabaseConfig;

  const supabase = createClient(supabaseUrl, supabaseKey);
  useEffect(() => {
    const fetchEsportsData = async () => {
      const { data: esports, error } = await supabase.from("esports").select();
      console.log(esports);
    };
    fetchEsportsData();
  });
  useEffect(() => {
    const fetchEsportsTournamentsData = async () => {
      const { data: tournaments, error } = await supabase
        .from("esports-tournaments")
        .select();
      console.log(tournaments);
    };
    fetchEsportsTournamentsData();
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
