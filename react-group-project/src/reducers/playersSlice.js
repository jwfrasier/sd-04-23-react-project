import { createClient } from "@supabase/supabase-js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabaseConfig from "../../../supabaseConfig";

const initialState = {
  value: [],
  selectedPlayer: null,
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
  reducers: {
    setSelectedPlayer: (state, action) => {
      state.selectedPlayer = action.payload;
    },
  },
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

export const { setSelectedPlayer } = playersSlice.actions;
export default playersSlice.reducer;
