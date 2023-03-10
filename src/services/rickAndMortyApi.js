import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = process.env.REACT_APP_API_URL;

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (query) => `character/?name=${query}`,
    }),
    getCharactersById: builder.query({
      query: (id) => `character/${id}`,
    }),
  }),
});
export const { useGetCharactersQuery, useGetCharactersByIdQuery } =
  rickAndMortyApi;
