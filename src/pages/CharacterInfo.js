import { StatusMessage } from "../components/StatusMessage";
import { useGetCharactersByIdQuery } from "../services/rickAndMortyApi";
import { Button } from "../components/Button";
import { Img } from "../components/Img";
import { ResultsKeysItem } from "../components/ResultsKeysItem";
import style from "./CharacterInfo.module.scss";

export const CharacterInfo = ({ id }) => {
  const { data, error, isLoading } = useGetCharactersByIdQuery(id);

  if (isLoading) {
    return <StatusMessage message="Loading..." />;
  }

  if (error) {
    return <StatusMessage message="Error while loading" />;
  }

  return (
    <div className={style.container}>
      <Button children="GO BACK" />
      <div className={style.infoContainer}>
        <Img src={data.image} name={data.name} classes={style.img} />
        <h1 className={style.h1}>{data.name}</h1>
        <h3 className={style.h3}>Information</h3>
        <dl>
          <ResultsKeysItem term="Gender" description={data.gender} />
          <ResultsKeysItem term="Status" description={data.status} />
          <ResultsKeysItem term="Specie" description={data.species} />
          <ResultsKeysItem term="Origin" description={data.origin.name} />
          <ResultsKeysItem term="Type" description={data.type || "Unknown"} />
        </dl>
      </div>
    </div>
  );
};
