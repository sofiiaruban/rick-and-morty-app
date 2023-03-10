import { StatusMessage } from "../components/StatusMessage";
import { useGetCharactersByIdQuery } from "../services/rickAndMortyApi";
import { Button } from "../components/Button";
import { Img } from "../components/Img";
import { ResultsKeysItem } from "../components/ResultsKeysItem";

export const CharacterInfo = ({ id }) => {
  const { data, error, isLoading } = useGetCharactersByIdQuery(id);

  if (isLoading) {
    return <StatusMessage message="Loading..." />;
  }

  if (error) {
    return <StatusMessage message="Error while loading" />;
  }
  const resultsKeysList = ["gender", "status", "specie", "origin", "type"];

  return (
    <>
      <Button children="GO BACK" />
      <Img src={data.image}></Img>
      <h1>{data.name}</h1>
      <h3>Information</h3>
      <dl>
        {resultsKeysList.map((item) => (
          <ResultsKeysItem term={item} description={data.item} />
        ))}
      </dl>
    </>
  );
};
