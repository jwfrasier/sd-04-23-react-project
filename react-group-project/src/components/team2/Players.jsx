/** @format */

import "../../App.css";
import React from "react";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

import supabaseConfig from "../../../../supabaseConfig";

function players() {
	const [esports, setEsports] = useState([]);
	const { supabaseUrl, supabaseKey } = supabaseConfig;

	const supabase = createClient(supabaseUrl, supabaseKey);
	useEffect(() => {
		const fetchEsportsData = async () => {
			const { data, error } = await supabase.from("esports").select();
			if (error) {
				// Handle the error if needed
				console.error("Error fetching data:", error);
			} else {
				setEsports(data);
			}
		};
		fetchEsportsData();
	}, []);

	return (
		<div>
			{esports.map((player) => (
				<p>{player.Country}</p>
			))}
		</div>
	);
}

export default players;
