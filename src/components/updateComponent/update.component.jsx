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
                <span className={classes.list}>Price alart changes</span>
                <span className={classes.list}>New product arrivals</span>
                <span className={classes.list}>changes in exchange rates</span>
                <span className={classes.list}>maintenace and services</span>
                <span className={classes.list}>durable product alart</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Update;
