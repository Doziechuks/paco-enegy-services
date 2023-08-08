import classes from "./subsidiaries.module.css";

import { useEffect, useRef, useState } from "react";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggleSubsidiary } from "../../redux/navToggle/navToggleSelector";
import {
  handleToggleNavbar,
  handleToggleSubsidiary,
} from "../../redux/navToggle/navToggleAction";

const Subsidiaries = (props) => {
  const {
    showSubsidiary,
    isMobile,
    setShowNavbar,
    setShowSubsidiary,
    showSubsidiaryRef,
    showdropDown,
  } = props;
  const history = useHistory();
  console.log({ showdropDown });

  return (
    <div
      className={`${classes.container} ${showdropDown && classes.show} ${
        isMobile && classes.mobileShowContainer
      }`}
    >
      <div
        className={classes.link}
        onClick={() => {
          setShowNavbar();
          // setShowSubsidiary();
          history.push("/services/solarinstallations");
        }}
      >
        Solar installation and maintenance
      </div>
      <hr />
      <div
        className={classes.link}
        onClick={() => {
          setShowNavbar();
          // setShowSubsidiary();
          history.push("/services/CCTVinstallations");
        }}
      >
        CCTV installation
      </div>
      <hr />
      <div
        className={classes.link}
        onClick={() => {
          setShowNavbar();
          // setShowSubsidiary();
          history.push("/services/generalhousewiring");
        }}
      >
        General house wiring
      </div>
      <hr />
      <div
        className={classes.link}
        onClick={() => {
          setShowNavbar();
          // setShowSubsidiary();
          history.push("/services/partnership");
        }}
      >
        Partnership
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Subsidiaries);
