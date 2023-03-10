import { useGetCharactersQuery } from "../services/rickAndMortyApi";
import { CharacterCard } from "../components/CharacterCard";
import style from "./Home.module.scss";
import { Logo } from "../components/Logo";
import { useState } from "react";
import { Searchbar } from "./Searchbar";
export const Home = () => {
  const [query, setQuery] = useState("");
  const { data, error, isLoading } = useGetCharactersQuery(query);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={style.home}>
      <Logo />
      <Searchbar onChange={changeHandler} value={query} />
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
