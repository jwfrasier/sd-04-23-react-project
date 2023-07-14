import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../supabase";

const initialState = {
  value: [],
};

export const fetchEsports = createAsyncThunk("data/getEsports", async () => {
  const { data } = await supabase.from("esports").select();
  return data;
});

export const esportsSlice = createSlice({
  name: "esports",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEsports.pending]: (state) => {
      state.loading = true;
    },
    [fetchEsports.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value = payload;
    },
    [fetchEsports.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default esportsSlice.reducer;
