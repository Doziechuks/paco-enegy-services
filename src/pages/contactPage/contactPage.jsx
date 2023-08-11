import classes from './contactPage.module.css';

import { selectSubmitForm } from '../../redux/navToggle/navToggleSelector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import PageHeading from '../pageHeading/pageHeading.component';
import ContactForm from '../../components/contactForm/contactForm.component';
import Address from '../../components/address/address.component';
import Compliment from '../../components/compliment/compliment.component';
import { Seo } from '../../seo';
import { useEffect } from 'react';

const ContactPage = ({ success }) => {
  useEffect(() => {
    Seo({
      title:
        "contact us || PACO energy services",
      metaDescription:
        "PACO buy items ranging from Electronics, footwares, baby wares and many more from around the globe and get it shipped to your doorstep in Africa",
    });
  }, []);

  return (
    <section className={classes.wrapper}>
      <PageHeading
        background="./images/myPhone.avif"
        title="contact us"
      />
      {
        success ? <div className={classes.container}>
        <Address isContactPage />
        <ContactForm isContactPage />
      </div> : <Compliment />
      }
    </section>
  );
}
 
const mapStateToProps = createStructuredSelector({
  success: selectSubmitForm
});
export default connect(mapStateToProps)(ContactPage);