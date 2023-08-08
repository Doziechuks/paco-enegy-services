import { useState } from "react";
import classes from "./coreValues.module.css";

const CoreValues = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showMobileScroll, setShowMobileScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
    if (window.scrollY >= 1200) {
      setShowMobileScroll(true);
    } else {
      setShowMobileScroll(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`${classes.container} ${showScroll && classes.show} ${
        showMobileScroll && classes.mobileShow
      }`}
    >
      <h2>our core values</h2>
      <ul className={classes.values}>
        <li>
          <b>Sustainability:</b>Prioriting renewable energy for a greener world.
        </li>
        <li>
          <b>Innovation:</b> We excel by advancing solar technology.
        </li>
        <li>
          <b>Customers First:</b> We guide and support our clients.
        </li>
        <li>
          <b>Empowerment:</b> Together, we drive solar progress.
        </li>
      </ul>
    </div>
  );
};

export default CoreValues;
