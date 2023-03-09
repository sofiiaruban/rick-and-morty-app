import { configureStore } from "@reduxjs/toolkit";
import { rickAndMortyApi } from "../services/rickAndMortyApi";
import idSlice from "./idSlice";

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.path]: rickAndMortyApi.reducer,
    id: idSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});
