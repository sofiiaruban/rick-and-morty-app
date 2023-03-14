import style from "./Button.module.scss";

export const Button = ({ children }) => {
  return <button className={style.button}>{children}</button>;
};
