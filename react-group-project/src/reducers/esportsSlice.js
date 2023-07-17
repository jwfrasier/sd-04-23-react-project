import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import supabase from "../supabase";

const initialState = {
  value: [],
  filteredValue: [],
};

export const fetchEsports = createAsyncThunk("data/getEsports", async () => {
  const { data } = await supabase.from("esports").select().range(0, 19);
  return data;
});

export const applyFilter = createAction(
  "esports/applyFilter",
  (key, value) => ({
    payload: { key, value },
  })
);

export const esportsSlice = createSlice({
  name: "esports",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEsports.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEsports.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.value = payload;
        state.filteredValue = payload; // Initialize filteredValue with fetched data
      })
      .addCase(fetchEsports.rejected, (state) => {
        state.loading = false;
      })
      .addCase(applyFilter, (state, action) => {
        const { key, value } = action.payload;
        if (key && value) {
          state.filteredValue = state.value.filter(
            (item) => item[key] === value
          );
        } else {
          state.filteredValue = state.value;
        }
      });
  },
});

export default esportsSlice.reducer;
