import style from "./Button.module.scss";

export const Button = ({ children }) => {
  return (
    <a href="/">
      <button className={style.button}>{children}</button>
    </a>
  );
};
