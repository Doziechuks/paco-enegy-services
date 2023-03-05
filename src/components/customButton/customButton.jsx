import classes from './customButton.module.css';

const CustomButton = ({children, ...otherProps}) => {
  return (
    <button className={classes.visitPage} {...otherProps}>
      {children} <span></span>
    </button>
  );
}
 
export default CustomButton;