import { configureStore } from "@reduxjs/toolkit";
import fetchDatabaseData from "./supabaseSlice";
export const store = configureStore({
  // reducers go here yall
  reducer: {
    [fetchDatabaseData.reducerPath]: fetchDatabaseData.reducer,
  },
});
