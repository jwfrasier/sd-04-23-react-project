/** @format */

import "./App.css";
//import Component1 from "./components/team1/Component1";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

import supabaseConfig from "../../supabaseConfig";
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
			{isSelected === "Tournaments" && (
				<Tournament tournamentImages={tournamentImages} />
			)}
			{isSelected === "Team 2" && <Players />}
		</div>
	);
}

export default App;
