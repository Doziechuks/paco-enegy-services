import classes from './indexHeaderItems.module.css';

const IndexHeaderItems = ({ item }) => {
  const { title, imageUrl, info } = item;
  return (
    <div
      className={classes.wrapper}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${imageUrl})`,
      }}
    >
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  );
}
 
export default IndexHeaderItems;