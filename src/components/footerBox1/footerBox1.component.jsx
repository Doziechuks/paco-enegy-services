import classes from "./footerBox1.module.css";

import { useHistory } from "react-router-dom";

import logo from "../../assets/pacoLogo1.png";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const FooterBox1 = () => {
  const history = useHistory();

  return (
    <div className={classes.box1}>
      <img
        src={logo}
        className={classes.logo}
        alt="logo"
        onClick={() => history.push("/")}
      />
      <p>
        PACO Energy services is a forward-thinking solar installation company on
        a mission to revolutionize the way individuals and businesses access
        clean, renewable energy.
      </p>
      <div className={classes.socialmediaBox}>
        <span href="#">
          <BsFacebook className={classes.mediaIcons} />
        </span>
        <span href="#">
          <AiFillInstagram className={classes.mediaIcons} />
        </span>
        <span href="#">
          <IoLogoWhatsapp className={classes.mediaIcons} />
        </span>
      </div>
    </div>
  );
};

export default FooterBox1;
