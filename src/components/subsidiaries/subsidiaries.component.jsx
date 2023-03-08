import classes from './subsidiaries.module.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectToggleSubsidiary } from '../../redux/navToggle/navToggleSelector';
import { handleToggleNavbar, handleToggleSubsidiary } from '../../redux/navToggle/navToggleAction';

const Subsidiaries = ({showSubsidiary, isMobile, setShowNavbar, setShowSubsidiary}) => {
  console.log(showSubsidiary);
  return (
    <div
      className={`${classes.container} ${showSubsidiary && classes.show} ${
        isMobile && classes.mobileShowContainer
      }`}
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
  showSubsidiary: selectToggleSubsidiary
});
const mapDispatchToProps = dispatch => ({
  setShowNavbar: () => dispatch(handleToggleNavbar()),
  setShowSubsidiary: () => dispatch(handleToggleSubsidiary())
});
export default connect(mapStateToProps, mapDispatchToProps)(Subsidiaries);