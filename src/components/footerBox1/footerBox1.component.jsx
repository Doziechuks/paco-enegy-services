import classes from './footerBox1.module.css';

import { useHistory } from "react-router-dom";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const FooterBox1 = () => {
   const history = useHistory();
   
  return (
    <div className={classes.box1}>
      <img
        src=""
        className={classes.logo}
        alt="logo"
        onClick={() => history.push("/")}
      />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ad
        neque numquam enim architecto, reiciendis ipsam totam ea inventor
      </p>
      <div className={classes.socialmediaBox}>
        <a href="#">
          <BsFacebook className={classes.mediaIcons} />
        </a>
        <a href="#">
          <AiFillInstagram className={classes.mediaIcons} />
        </a>
        <a href="#">
          <IoLogoWhatsapp className={classes.mediaIcons} />
        </a>
      </div>
    </div>
  );
}
 
export default FooterBox1;