import { configureStore } from "@reduxjs/toolkit";
import { rickAndMortyApi } from "../services/rickAndMortyApi";

export default store = configureStore({
  reducer: {
    [rickAndMortyApi.path]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});
