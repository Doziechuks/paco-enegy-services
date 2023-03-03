import classes from './navbarOptions.module.css';

import { useState } from 'react';

const NavbarOptions = ({ mobileNav }) => {
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
    <div
      className={`${classes.navLinks} ${
        mobileNav ? classes.mobileNavLinks : ""
      }`}
    >
      <a
        href="#"
        className={`${classes.links} ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        }`}
      >
        home <span></span>
      </a>
      <a
        href="#"
        className={`${classes.links} ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        }`}
      >
        about <span></span>
      </a>
      <a
        href="#"
        className={`${classes.links} ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        }`}
      >
        services <span></span>
      </a>
      <a
        href="#"
        className={`${classes.links} ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        }`}
      >
        contact <span></span>
      </a>
    </div>
  );
}
 
export default NavbarOptions;