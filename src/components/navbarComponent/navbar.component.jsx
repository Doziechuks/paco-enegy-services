import { useState } from "react";
import classes from "./navbar.module.css";

import { FaBars } from "react-icons/fa";

import NavbarOptions from "../navbarOpions/navOptions.component";
import MobileNavbar from "../mobileNavbar/mobileNavbar.component";

import { selectToggleNavbar } from "../../redux/navToggle/navToggleSelector";
import { handleToggleNavbar } from "../../redux/navToggle/navToggleAction";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const Navbar = ({ showNavbar, setShowNavbar }) => {
  const [scrollNav, setScrollNav] = useState(false);
  console.log({showNavbar});

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
        <div className={classes.handBurggerBox} onClick= {() => setShowNavbar()}>
          <FaBars className={classes.icon} />
        </div>
      </div>
      <MobileNavbar />
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  showNavbar: selectToggleNavbar
});
const mapDispatchToProps = dispatch => ({
  setShowNavbar: () => dispatch(handleToggleNavbar())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
