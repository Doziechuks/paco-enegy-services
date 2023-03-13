import classes from './footer.module.css';

import FooterBox1 from '../footerBox1/footerBox1.component';
import FooterBox2 from '../footerBox2/footerBox2.component';
import FooterBox3 from '../footerBox3/footerBox3.component';

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.container}>
        <FooterBox1 />
        <FooterBox2 />
        <FooterBox3 />
      </div>
      <hr />
      <p className={classes.copyRight}>
        &copy;2023 <span>Paco energy services</span>, All rights reserved. built
        by chuka
      </p>
    </footer>
  );
}
 
export default Footer;