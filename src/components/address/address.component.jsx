import classes from './address.module.css';

import { BsFacebook } from "react-icons/bs";

const Address = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>
        <span> how can we</span> help you?
      </h1>
      <div className={classes.addressBox}>
        <h2>address:</h2>
        <p>
          no. 5 tonimas plaza, along ifite road, <br /> awka, anambra state.
        </p>
      </div>
      <div className={classes.addressBox}>
        <h2>offic hour:</h2>
        <p>
          monday - friday: 8AM - 5PM <br /> saturday: 10AM - 3PM <br />{" "}
          sunday: PACO rests
        </p>
      </div>
      <div className={classes.addressBox}>
        <h2>telephone:</h2>
        <p>+2349023894793</p>
      </div>
      <div className={classes.addressBox}>
        <h2>email:</h2>
        <p>
          pacoenergyservices@info.com <br /> patrick@email.com
        </p>
      </div>
    </div>
  );
}
 
export default Address;