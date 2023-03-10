import { useState } from 'react';
import classes from './coreValues.module.css';

const CoreValues = () => {

  const [showScroll, setShowScroll] = useState(false);
  const [showMobileScroll, setShowMobileScroll] = useState(false);

  const handleScroll = () => {
    if(window.scrollY >= 500){
      setShowScroll(true);
    }else{
      setShowScroll(false);
    }
    if (window.scrollY >= 1200) {
      setShowMobileScroll(true);
    } else {
      setShowMobileScroll(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  return (
    <div
      className={`${classes.container} ${showScroll && classes.show} ${
        showMobileScroll && classes.mobileShow
      }`}
    >
      <h2>our core values</h2>
      <ul className={classes.values}>
        <li>Lorem amet, consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor adipisicing consectetur adipisicing.</li>
        <li>Lorem ipsum dolor consectetur sit amet, elit.</li>
        <li>Lorem ipsum consect adipisicing dolor sit amet.</li>
      </ul>
    </div>
  );
}
 
export default CoreValues;