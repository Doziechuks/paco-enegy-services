import classes from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.container}>
      <img src="" className={classes.logo} />
      <div className={classes.navLinks}>
        <a href="#" className={classes.links}>
          home <span></span>
        </a>
        <a href="#" className={classes.links}>
          about <span></span>
        </a>
        <a href="#" className={classes.links}>
          services <span></span>
        </a>
        <a href="#" className={classes.links}>
          contact <span></span>
        </a>
      </div>
    </nav>
  );
}
 
export default Navbar;