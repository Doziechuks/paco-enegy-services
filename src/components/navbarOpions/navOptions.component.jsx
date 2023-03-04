import classes from './navbarOptions.module.css';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { handleToggleNavbar } from '../../redux/navToggle/navToggleAction';

const NavbarOptions = ({ mobileNav, setShowNavbar }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [path, setPathName] = useState('');
  const {pathname} = useLocation();

    useEffect(() => {
      setPathName(pathname);
    }, [pathname]);

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
      <Link
        to="/services"
        className={`${classes.links} ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        } ${path.includes("/services") ? classes.active : ""}`}
        onClick={() => setShowNavbar()}
      >
        services <span></span>
      </Link>
      <Link
        to="/contactus"
        className={`${classes.links} ${scrollNav ? classes.change : ""} ${
          mobileNav ? classes.mobileLinks : ""
        } ${path.includes("/contactus") ? classes.active : ""}`}
        onClick={() => setShowNavbar()}
      >
        contact <span></span>
      </Link>
    </div>
  );
}
 
const mapDispatchToProps = (dispatch) => ({
  setShowNavbar: () => dispatch(handleToggleNavbar()),
});
export default connect(null, mapDispatchToProps)(NavbarOptions);