import classes from './mobileNavbar.module.css';

import { FaTimes } from "react-icons/fa";

import NavbarOptions from '../navbarOpions/navOptions.component';

const MobileNavbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.iconBox}>
        <FaTimes className={classes.icon} />
      </div>
      <NavbarOptions mobileNav />
    </div>
  );
}
 
export default MobileNavbar;