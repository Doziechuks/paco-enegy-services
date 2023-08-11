import React from "react";
import styles from "./Spinner.module.css";
// import spinner from "../../assets/images/loading.gif";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinnerBox}></div>
    </div>
  );
};

export default Spinner;
