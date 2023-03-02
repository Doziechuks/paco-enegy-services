import { useState } from "react";
import classes from "./navbar.module.css";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={`${classes.container} ${scrollNav ? classes.scroll : ""}`}>
      <img src="" className={classes.logo} />
      <div className={classes.navLinks}>
        <a
          href="#"
          className={`${classes.links} ${scrollNav ? classes.change : ""}`}
        >
          home <span></span>
        </a>
        <a
          href="#"
          className={`${classes.links} ${scrollNav ? classes.change : ""}`}
        >
          about <span></span>
        </a>
        <a
          href="#"
          className={`${classes.links} ${scrollNav ? classes.change : ""}`}
        >
          services <span></span>
        </a>
        <a
          href="#"
          className={`${classes.links} ${scrollNav ? classes.change : ""}`}
        >
          contact <span></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
