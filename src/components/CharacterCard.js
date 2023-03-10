import { Img } from "./Img";
import style from "./CharacterCard.module.scss";

export const CharacterCard = ({ src, name, species }) => {
  return (
    <div className={style.card}>
      <Img src={src} name={name} classes={`${style.img} `} />
      <div className={style.description}>
        <h3 className={style.h3}>{name}</h3>
        <p>{species}</p>
      </div>
    </div>
  );
};
