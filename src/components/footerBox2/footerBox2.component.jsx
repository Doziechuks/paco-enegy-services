import classes from './footerBox2.module.css';
import { useHistory } from 'react-router-dom';

const FooterBox2 = () => {
  const history = useHistory();
  return (
    <div className={classes.box2}>
      <h2>quick link</h2>
      <ul>
        <li onClick={() => history.push("/")}>home</li>
        <div className={classes.line} />
        <li onClick={() => history.push("/about")}>about</li>
        <div className={classes.line} />
        <li onClick={() => history.push("/services")}>
          solar installation and maintenance
        </li>
        <div className={classes.line} />
        <li onClick={() => history.push("/services")}>CCTV installation</li>
        <div className={classes.line} />
        <li onClick={() => history.push("/services")}>general house wiring</li>
        <div className={classes.line} />
        <li onClick={() => history.push("/services")}>partnership</li>
        <div className={classes.line} />
        <li onClick={() => history.push("/contactus")}>contact us</li>
      </ul>
    </div>
  );
}
 
export default FooterBox2;