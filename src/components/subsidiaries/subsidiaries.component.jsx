import classes from './subsidiaries.module.css';

import { useState } from "react";

import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectToggleSubsidiary } from '../../redux/navToggle/navToggleSelector';
import { handleToggleNavbar, handleToggleSubsidiary } from '../../redux/navToggle/navToggleAction';

const Subsidiaries = ({showSubsidiary, isMobile, setShowNavbar, setShowSubsidiary }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleScroll = () => {
    if(window.scrollY >= 200) {
      setShow(true);
    }else{
      setShow(false);
    }

  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div
      className={`${classes.container} ${showSubsidiary && classes.show} ${
        isMobile && classes.mobileShowContainer
      } ${show && classes.open}`}
    >
      <div className={classes.link} onClick={() => {setShowNavbar(); setShowSubsidiary(); history.push('/services/solarinstallations')}}>
        Solar installation and maintenance
      </div>
      <hr />
      <div className={classes.link} onClick={() => {setShowNavbar(); setShowSubsidiary(); history.push('/services/CCTVinstallations')}}>
        CCTV installation
      </div>
      <hr />
      <div className={classes.link} onClick={() => {setShowNavbar(); setShowSubsidiary(); history.push("/services/generalhousewiring");}}>
        General house wiring
      </div>
      <hr />
      <div className={classes.link} onClick={() => {setShowNavbar(); setShowSubsidiary(); history.push("/services/partnership");}}>
        Partnership
      </div>
    </div>
  );
}
 
const mapStateToProps = createStructuredSelector({
  showSubsidiary: selectToggleSubsidiary,
});
const mapDispatchToProps = dispatch => ({
  setShowNavbar: () => dispatch(handleToggleNavbar()),
  setShowSubsidiary: () => dispatch(handleToggleSubsidiary()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subsidiaries);