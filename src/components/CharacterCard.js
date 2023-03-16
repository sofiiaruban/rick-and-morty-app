import { Img } from "./Img";
import style from "./CharacterCard.module.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateId } from "../store/idSlice";
export const CharacterCard = ({ id, src, name, species }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.card} onClick={() => dispatch(updateId(id))}>
      <Link to={`character/${id}`}>
        <Img src={src} name={name} classes={`${style.img} `} />
        <div className={style.description}>
          <h3 className={style.h3}>
            {name.length > 20 ? name.substring(0, 22) + "..." : name}
          </h3>
          <p className={style.p}>{species}</p>
        </div>
      </Link>
    </div>
  );
};
