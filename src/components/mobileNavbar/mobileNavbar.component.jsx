import classes from './mobileNavbar.module.css';

import { FaTimes } from "react-icons/fa";

import NavbarOptions from '../navbarOpions/navOptions.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { handleToggleNavbar } from '../../redux/navToggle/navToggleAction';
import { selectToggleNavbar } from '../../redux/navToggle/navToggleSelector';

const MobileNavbar = ({ showNavbar, setShowNavbar }) => {
  return (
    <div className={`${classes.container} ${showNavbar ? classes.show : ''}`}>
      <div className={classes.iconBox} onClick={() => setShowNavbar()}>
        <FaTimes className={classes.icon} />
      </div>
      <NavbarOptions mobileNav />
    </div>
  );
}
 
const mapStateToProps = createStructuredSelector({
  showNavbar: selectToggleNavbar,
});
const mapDispatchToProps = (dispatch) => ({
  setShowNavbar: () => dispatch(handleToggleNavbar()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MobileNavbar);