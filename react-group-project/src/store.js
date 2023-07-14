import { configureStore } from "@reduxjs/toolkit";
import esportsReducer from "./reducers/esportsSlice";

export const store = configureStore({
  // reducers go here yall
  reducer: {
    esports: esportsReducer,
  },
});
