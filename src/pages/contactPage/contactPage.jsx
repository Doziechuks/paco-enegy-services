import classes from './contactPage.module.css';

import PageHeading from '../pageHeading/pageHeading.component';
import ContactForm from '../../components/contactForm/contactForm.component';
import Address from '../../components/address/address.component';

const ContactPage = () => {
  return (
    <section className={classes.wrapper}>
      <PageHeading
        background="./images/myPhone.avif"
        title="contact us"
      />
      <div className={classes.container}>
        <Address isContactPage />
        <ContactForm isContactPage />
      </div>
    </section>
  );
}
 
export default ContactPage;