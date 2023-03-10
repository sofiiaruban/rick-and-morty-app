export const Img = ({ src, name, classes }) => {
  return <img src={src} alt={`${name} character`} className={classes} />;
};
