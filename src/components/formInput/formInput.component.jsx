import classes from './formInput.module.css';

const FormInput = ({isSmall, ...otherProps}) => {
  return ( 
     <input {...otherProps} className={`${classes.formInput} ${isSmall && classes.smallWidth}`} />
   );
}
 
export default FormInput;