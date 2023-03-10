import style from "./Searchbar.module.scss";

export const Searchbar = ({ onChange, value }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name..."
      className={style.searchbar}
      onChange={onChange}
      value={value}
    />
  );
};
