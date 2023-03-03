import { useState } from "react";
import classes from "./navbar.module.css";

import { FaBars, FaTimes } from "react-icons/fa";

import NavbarOptions from "../navbarOpions/navOptions.component";
import MobileNavbar from "../mobileNavbar/mobileNavbar.component";

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
    <nav className={classes.wrapper}>
      <div
        className={`${classes.container} ${scrollNav ? classes.scroll : ""}`}
      >
        <img src="" className={classes.logo} />
        <NavbarOptions />
        <div className={classes.handBurggerBox}>
          <FaBars className={classes.icon} />
        </div>
      </div>
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
