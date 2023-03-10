import { Img } from "./Img";
import style from "./CharacterCard.module.scss";

export const CharacterCard = ({ src, name, species }) => {
  return (
    <div className={style.card}>
      <Img src={src} name={name} classes={style.img} />
      <h3>{name}</h3>
      <p>{species}</p>
    </div>
  );
};
