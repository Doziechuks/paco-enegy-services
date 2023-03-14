import classes from './compliment.module.css';

import CustomButton from '../customButton/customButton';

import { connect } from 'react-redux';
import { handleSubmitForm } from '../../redux/navToggle/navToggleAction';

import { useHistory } from 'react-router-dom';

const Compliment = ({ setSuccess }) => {
  const history = useHistory();

  return ( 
    <section className={classes.wrapper}>
      <h2>Thank you for reaching out to us</h2>
      <CustomButton onClick={() => {history.push('/'); setSuccess(true)}}>back to home page</CustomButton>
    </section>
   );
}
 
const mapDispatchToProps = (dispatch) => ({
  setSuccess: (user) => dispatch(handleSubmitForm(user)),
});

export default connect(null, mapDispatchToProps)(Compliment);