import { configureStore } from "@reduxjs/toolkit";
import tournamentReducer from "./reducers/tournamentSlice";
// import fetchDatabaseData from "./supabaseSlice";
export const store = configureStore({
  // reducers go here yall
  reducer: {
    tournament: tournamentReducer,
    // [fetchDatabaseData.reducerPath]: fetchDatabaseData.reducer,
  },
});
