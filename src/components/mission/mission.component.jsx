import classes from './mission.module.css';

import { useState } from 'react';

const MissionVisionContainer = ({title, mission, isMission, isVision}) => {
   const [showScroll, setShowScroll] = useState(false);
   const [showMobileScroll, setShowMobileScroll] = useState(false);

   const handleScroll = () => {
     if (window.scrollY >= 500) {
       setShowScroll(true);
     } else {
       setShowScroll(false);
     }
     if (window.scrollY >= 1650) {
       setShowMobileScroll(true);
     } else {
       setShowMobileScroll(false);
     }
   };
   window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`${classes.container} ${isMission && classes.gap} ${
        isVision && showScroll ? classes.show : ''
      } ${showMobileScroll && classes.mobileShow}`}
    >
      <h2>{title}</h2>
      <p className={classes.values}>{mission}</p>
    </div>
  );
}
 
export default MissionVisionContainer;