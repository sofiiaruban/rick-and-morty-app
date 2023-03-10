import { useGetCharactersQuery } from "../services/rickAndMortyApi";
import { CharacterCard } from "../components/CharacterCard";
import style from "./Home.module.scss";
import { Logo } from "../components/Logo";
export const Home = () => {
  const { data, error, isLoading } = useGetCharactersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }
  console.log(Array.isArray(data.results));
  return (
    <div className={style.home}>
      <Logo />
      <div className={style.characterContainer}>
        {data.results.map((item) => (
          <CharacterCard
            key={item.id}
            src={item.image}
            name={item.name}
            species={item.species}
          />
        ))}
      </div>
    </div>
  );
};
//{
//  JSON.stringify(data.results);
//}
