import { configureStore } from "@reduxjs/toolkit";
import { rickAndMortyApi } from "../services/rickAndMortyApi";
import idSlice from "./idSlice";
import filterSlice from "./filterSlice";

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    id: idSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});
