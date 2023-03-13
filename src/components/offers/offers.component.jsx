import classes from './offers.module.css';

const Offers = ({items}) => {
  return (
    <div className={classes.container}>
      <li>{items}</li>
    </div>
  );
}
 
export default Offers;