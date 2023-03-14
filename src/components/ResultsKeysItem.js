import style from "./ResultsKeysItem.module.scss";

export const ResultsKeysItem = ({ term, description }) => {
  return (
    <div className={style.descriptionListElem}>
      <dt className={style.dt}>{term}</dt>
      <dd className={style.dd}>{description}</dd>
    </div>
  );
};
