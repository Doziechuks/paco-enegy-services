import classes from './contactSection.module.css';

import Title from '../titleComponent/title.component';
import ContactForm from '../contactForm/contactForm.component';

const ContactSection = () => {
  return (
    <section className={classes.wrapper}>
      <Title heading={"get"} title={"to us"} isContact />
      <div className={classes.contactBox}>
        <ContactForm />
      </div>
    </section>
  );
}
 
export default ContactSection;