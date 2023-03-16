import { useGetCharactersQuery } from "../services/rickAndMortyApi";
import { CharacterCard } from "../components/CharacterCard";
import style from "./Home.module.scss";
import { Logo } from "../components/Logo";
import { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar";
import { StatusMessage } from "../components/StatusMessage";

export const Home = () => {
  const [query, setQuery] = useState(() => {
    const query = localStorage.getItem("query");
    const initialValue = JSON.parse(query);
    return initialValue || "";
  });
  const { data, error, isLoading } = useGetCharactersQuery(query);

  useEffect(() => {
    localStorage.setItem("query", JSON.stringify(query));
  }, [query]);

  if (isLoading) {
    return <StatusMessage message="Loading..." />;
  }

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={style.home}>
      <Logo />
      <Searchbar onChange={changeHandler} value={query} />
      <div className={style.characterContainer}>
        {error ? (
          <StatusMessage message="No results found" />
        ) : (
          data.results.map((item) => (
            <CharacterCard
              id={item.id}
              key={item.id}
              src={item.image}
              name={item.name}
              species={item.species}
            />
          ))
        )}
      </div>
    </div>
  );
};
