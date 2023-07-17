/** @format */

import { createClient } from "@supabase/supabase-js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabaseConfig from "../../../supabaseConfig";
const initialState = {
	value: [],
};
const { supabaseUrl, supabaseKey } = supabaseConfig;

const supabase = createClient(supabaseUrl, supabaseKey);
export const fetchTournamentData = createAsyncThunk(
	"data/getPlayers",
	async () => {
		const { data } = await supabase.from("esports").select();
		console.log(data);
		return data;
	}
);
export const playersSlice = createSlice({
	name: "players",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchTournamentData.pending]: (state) => {
			state.loading = true;
		},

		[fetchTournamentData.fulfilled]: (state, { payload }) => {
			state.loading = false;
			console.log(payload);
			state.value = payload;
		},
		[fetchTournamentData.rejected]: (state) => {
			state.loading = false;
		},
	},
});
export default playersSlice.reducer;
