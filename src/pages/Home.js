import { useGetCharactersQuery } from "../services/rickAndMortyApi";

export const Home = () => {
  const { data, error, isLoading } = useGetCharactersQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
};
