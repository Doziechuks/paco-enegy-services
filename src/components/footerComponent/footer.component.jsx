import classes from './footer.module.css';

import FooterBox1 from '../footerBox1/footerBox1.component';
import FooterBox2 from '../footerBox2/footerBox2.component';
import FooterBox3 from '../footerBox3/footerBox3.component';

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <FooterBox1 />
      <FooterBox2 />
      <FooterBox3 />
    </footer>
  );
}
 
export default Footer;