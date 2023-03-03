import classes from './navbarOptions.module.css';

import { useState } from 'react';

import { connect } from 'react-redux';
import { handleToggleNavbar } from '../../redux/navToggle/navToggleAction';

const NavbarOptions = ({ mobileNav, setShowNavbar }) => {
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
        onClick={() => setShowNavbar()}
      >
        home <span></span>
      </a>
      <a
        href="#"
        className={`${classes.links} ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        }`}
        onClick={() => setShowNavbar()}
      >
        about <span></span>
      </a>
      <a
        href="#"
        className={`${classes.links} ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        }`}
        onClick={() => setShowNavbar()}
      >
        services <span></span>
      </a>
      <a
        href="#"
        className={`${classes.links} ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        }`}
        onClick={() => setShowNavbar()}
      >
        contact <span></span>
      </a>
    </div>
  );
}
 
const mapDispatchToProps = (dispatch) => ({
  setShowNavbar: () => dispatch(handleToggleNavbar()),
});
export default connect(null, mapDispatchToProps)(NavbarOptions);