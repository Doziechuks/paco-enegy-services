import classes from './footerBox2.module.css';
import { useHistory } from 'react-router-dom';

const FooterBox2 = () => {
  const history = useHistory();
  return (
    <div className={classes.box2}>
      <h2>quick link</h2>
      <ul>
        <li onClick={() => history.push("/")}>home</li>
        <hr />
        <li onClick={() => history.push("/about")}>about</li>
        <hr />
        <li onClick={() => history.push("/services/solarinstallations")}>
          solar installation and maintenance
        </li>
        <hr />
        <li onClick={() => history.push("/services/CCTVinstallations")}>
          CCTV installation
        </li>
        <hr />
        <li onClick={() => history.push("/services/generalhousewiring")}>
          general house wiring
        </li>
        <hr />
        <li onClick={() => history.push("/services/partnership")}>
          partnership
        </li>
        <hr />
        <li onClick={() => history.push("/contactus")}>contact us</li>
      </ul>
    </div>
  );
}
 
export default FooterBox2;