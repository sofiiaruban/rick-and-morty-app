import style from "./Searchbar.module.scss";

export const Searchbar = () => {
  return (
    <input
      type="text"
      placeholder="Filter by name..."
      className={style.searchbar}
    />
  );
};
