import classes from "./navbarOptions.module.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Subsidiaries from "../subsidiaries/subsidiaries.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  handleToggleNavbar,
  handleToggleSubsidiary,
} from "../../redux/navToggle/navToggleAction";
import { selectToggleSubsidiary } from "../../redux/navToggle/navToggleSelector";

const NavbarOptions = ({
  mobileNav,
  showSubsidiary,
  setShowNavbar,
  setShowSubsidiary,
  setShow,
}) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [path, setPathName] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      <Link
        to="/"
        className={`${classes.links} ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        } ${path === "/" ? classes.active : ""}`}
        onClick={() => setShowNavbar()}
      >
        home <span></span>
      </Link>
      <Link
        to="/about"
        className={`${classes.links} ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        } ${path.includes("/about") ? classes.active : ""}`}
        onClick={() => setShowNavbar()}
      >
        about <span></span>
      </Link>
      <div
        className={`${classes.links} ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        } ${path.includes("/services") ? classes.active : ""}`}
        onClick={() => {
          setShowSubsidiary();
          handleScrollTop();
        }}
      >
        services <span></span>
        <div className={`${classes.angleBox}`}>
          <FaAngleDown
            className={`${classes.angle} ${!showSubsidiary && classes.show}`}
          />
          <FaAngleUp
            className={`${classes.angle} ${showSubsidiary && classes.show}`}
          />
        </div>
      </div>
      <Link
        to="/contactus"
        className={`${classes.links} ${
          showSubsidiary && classes.mobileContact
        } ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        } ${path.includes("/contactus") ? classes.active : ""}`}
        onClick={() => setShowNavbar()}
      >
        contact <span></span>
      </Link>
      <Subsidiaries isMobile />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  showSubsidiary: selectToggleSubsidiary,
});

const mapDispatchToProps = (dispatch) => ({
  setShowNavbar: () => dispatch(handleToggleNavbar()),
  setShowSubsidiary: () => dispatch(handleToggleSubsidiary()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarOptions);
