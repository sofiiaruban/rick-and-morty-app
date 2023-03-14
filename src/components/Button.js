import { useNavigate } from "react-router-dom";
import style from "./Button.module.scss";

export const Button = ({ children }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <button className={style.button} onClick={clickHandler}>
      {children}
    </button>
  );
};
