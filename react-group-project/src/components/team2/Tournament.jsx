/** eslint-disable react/prop-types*/

import "../../App.css";
import React from "react";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

import supabaseConfig from "../../../../supabaseConfig";

const Tournament = ({ tournamentImages }) => {
  const [tournaments, setTournaments] = useState([]);
  const { supabaseUrl, supabaseKey } = supabaseConfig;

  const supabase = createClient(supabaseUrl, supabaseKey);
  useEffect(() => {
    const fetchEsportsTournamentsData = async () => {
      const { data, error } = await supabase
        .from("esports-tournaments")
        .select();
      console.log(data);

      if (error) {
        // Handle the error if needed
        console.error("Error fetching data:", error);
      } else {
        setTournaments(data);
      }
    };

    fetchEsportsTournamentsData();
  }, []);

  // Show a loading message or spinner while the data is being fetched
  if (tournaments.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tournament-page">
      {/* Render the tournament data */}
      <div className="product-card-container">
        {tournamentImages.map((images, index) => (
          <div className="product-card" key={images.image}>
            <img src={images.image} alt="photo" />
            {/* Render the tournament data for the corresponding image */}
            <div className="tournament-data" key={tournaments[index].id}>
              <h2 className="tournament-name">
                {tournaments[index].tournaments_name}
              </h2>
              <h2>{tournaments[index].tournaments_location}</h2>
              <h2>{tournaments[index].tournaments_participants_username}</h2>
              <h2>Start: {tournaments[index].tournaments_startDate}</h2>
              <h2>End: {tournaments[index].tournaments_endDate}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournament;
