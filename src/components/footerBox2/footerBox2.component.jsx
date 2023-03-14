import classes from './footerBox2.module.css';

import { useHistory } from 'react-router-dom';

const FooterBox2 = () => {
  const history = useHistory();

   const handleScrollTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };
  return (
    <div className={classes.box2}>
      <h2>quick links</h2>
      <ul>
        <li onClick={() => {history.push("/"); handleScrollTop();}}>home</li>
        <hr />
        <li onClick={() => {history.push("/about"); handleScrollTop();}}>about</li>
        <hr />
        <li onClick={() => {history.push("/services/solarinstallations"); handleScrollTop();}}>
          solar installation and maintenance
        </li>
        <hr />
        <li onClick={() => {history.push("/services/CCTVinstallations"); handleScrollTop();}}>
          CCTV installation
        </li>
        <hr />
        <li onClick={() => {history.push("/services/generalhousewiring"); handleScrollTop();}}>
          general house wiring
        </li>
        <hr />
        <li onClick={() => {history.push("/services/partnership"); handleScrollTop();}}>
          partnership
        </li>
        <hr />
        <li onClick={() => {history.push("/contactus"); handleScrollTop();}}>contact us</li>
      </ul>
    </div>
  );
}
 
export default FooterBox2;