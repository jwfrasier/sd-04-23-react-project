import React from "react";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

import supabaseConfig from "../../../supabaseConfig";

const Home = () => {
  const [tournaments, setTournaments] = useState([]);
  const { supabaseUrl, supabaseKey } = supabaseConfig;

  const supabase = createClient(supabaseUrl, supabaseKey);
  useEffect(() => {
    const fetchEsportsTournamentsData = async () => {
      const { data, error } = await supabase
        .from("esports-tournaments")
        .select();

      setTournaments(data);
    };

    fetchEsportsTournamentsData();
  }, []);

  return (
    <div>
      <h1>React Solo Project</h1>
      {/* Render the tournament data */}
      {tournaments.map((tournament) => (
        <div key={tournament.id}>
          <h2>{tournament.tournaments_name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
