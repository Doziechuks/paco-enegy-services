import classes from './customButton.module.css';

const CustomButton = ({ children, isVisit, isGetToUs,isSubmit, ...otherProps }) => {
  return (
    <button
      className={`${classes.visitPage} ${isVisit && classes.visit} ${
        isSubmit && classes.submit
      } ${isGetToUs && classes.getToUs}`}
      {...otherProps}
    >
      {children} <span></span>
    </button>
  );
}
 
export default CustomButton;