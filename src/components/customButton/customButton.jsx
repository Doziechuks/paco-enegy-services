import classes from './customButton.module.css';

const CustomButton = ({ children, isVisit, isGetToUs, ...otherProps }) => {
  return (
    <button
      className={`${classes.visitPage} ${isVisit && classes.visit} ${
        isGetToUs && classes.getToUs
      }`}
      {...otherProps}
    >
      {children} <span></span>
    </button>
  );
}
 
export default CustomButton;