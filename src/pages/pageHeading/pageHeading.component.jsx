import classes from './pageHeading.module.css';

const PageHeading = ({ background, title }) => {
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${background})`,
      }}
    >
      <h1>{title}</h1>
    </div>
  );
}
 
export default PageHeading;