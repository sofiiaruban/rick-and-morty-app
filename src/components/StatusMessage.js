import style from "./StatusMessage.module.scss";

export const StatusMessage = ({ message }) => {
  return <h1 className={style.message}>{message}</h1>;
};
