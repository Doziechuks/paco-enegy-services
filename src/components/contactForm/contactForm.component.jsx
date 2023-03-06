import classes from './contactForm.module.css';

import FormInput from '../formInput/formInput.component';

const ContactForm = () => {
  return ( 
    <form className={classes.container}>
      <div className={classes.nameEmail}>
        <FormInput type='text' placeholder='name' required isSmall />
        <FormInput type='email' placeholder='email' required isSmall />
      </div>
      <FormInput type='text' placeholder='title' required />
      <textarea placeholder='message body' className={classes.messages} />
    </form>
   );
}
 
export default ContactForm;