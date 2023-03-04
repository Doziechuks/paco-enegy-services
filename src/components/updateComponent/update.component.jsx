import classes from './update.module.css';

const Update = () => {
  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>latest update!!</h2>
      <marquee behavior="smooth" direction="left" className={classes.info}>
        <span>&#8902;</span>Lorem ipsum dolor sit, amet consectetur adipisicing
        elit.<span>&#8902;</span> Unde, vel temporibus! Soluta voluptates vel
        corporis<span>&#8902;</span> Facere cum ex maxime, velit assumenda
        maiores, hic iusto fuga in minima asperiores sed doloremque!<span>&#8902;</span>
      </marquee>
    </section>
  );
}
 
export default Update;