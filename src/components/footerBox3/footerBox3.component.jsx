import classes from './footerBox3.module.css';

import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

const FooterBox3 = () => {
  return (
    <div className={classes.box3}>
      <h2>contact info</h2>
      <div className={classes.address}>
        <div className={classes.phoneBox}>
          <BsTelephone className={classes.phone} />
          <span>+2347029374569</span>
        </div>
        <div className={classes.phoneBox}>
          <HiOutlineMail className={classes.phone} />
          <span>pacoenergyservices@info.com</span>
        </div>
        <div className={classes.office}>
          <GrLocation className={classes.phone} />
          <span>
            no. 5, tonimas plaza, along ifite road, <br />
            awka, anambra state.
          </span>
        </div>
      </div>
    </div>
  );
}
 
export default FooterBox3;