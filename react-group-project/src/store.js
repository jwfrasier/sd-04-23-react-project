import { configureStore } from "@reduxjs/toolkit";
import tournamentReducer from "./reducers/tournamentSlice";
import playersReducer from "./reducers/playersSlice";
// import fetchDatabaseData from "./supabaseSlice";
export const store = configureStore({
  // reducers go here yall
  reducer: {
    tournament: tournamentReducer,
    players: playersReducer,
    // [fetchDatabaseData.reducerPath]: fetchDatabaseData.reducer,
  },
});
