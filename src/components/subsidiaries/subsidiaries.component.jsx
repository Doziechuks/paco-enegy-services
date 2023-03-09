import classes from './subsidiaries.module.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectToggleSubsidiary } from '../../redux/navToggle/navToggleSelector';
import { handleToggleNavbar, handleToggleSubsidiary } from '../../redux/navToggle/navToggleAction';
import { useState } from 'react';

const Subsidiaries = ({showSubsidiary, isMobile, setShowNavbar, setShowSubsidiary }) => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if(window.scrollY >= 1500) {
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
      <div className={classes.link} onClick={() => {setShowNavbar(); setShowSubsidiary()}}>
        Solar installation and maintenance
      </div>
      <hr />
      <div className={classes.link} onClick={() => {setShowNavbar(); setShowSubsidiary()}}>
        CCTV installation
      </div>
      <hr />
      <div className={classes.link} onClick={() => {setShowNavbar(); setShowSubsidiary()}}>
        General house wiring
      </div>
      <hr />
      <div className={classes.link} onClick={() => {setShowNavbar(); setShowSubsidiary()}}>
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