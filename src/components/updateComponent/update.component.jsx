import classes from "./update.module.css";

const Update = () => {
  return (
    <section className={classes.mainWrapper}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>latest update!!</h2>
        <div className={classes.innerWrapper}>
          {[...Array(2)].map((_, index) => {
            return (
              <div key={index} className={classes.animationContainer}>
                <span className={classes.list}>
                  {index} Lorem ipsum dolor, sit
                </span>
                <span className={classes.list}>
                  {index + 1} Lorem ipsum dolor,
                </span>
                <span className={classes.list}>
                  {index + 2} Lorem ipsum dolor,
                </span>
                <span className={classes.list}>
                  {index + 3} Lorem ipsum dolor, sit
                </span>
                <span className={classes.list}>
                  {index + 4} Lorem ipsum dolor,
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Update;
