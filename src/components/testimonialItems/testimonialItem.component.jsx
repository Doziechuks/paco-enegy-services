import classes from './testimonialItem.module.css';

const TestimonialItem = ({ items }) => {
  const {image, name, title, quote} = items;
  return ( 
    <div className={classes.container}>
      <img src={image} alt="photo" className={classes.photo} />
      <div className={classes.infoBox}>
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
      <p className={classes.quotes}>{quote}</p>
    </div>
   );
}
 
export default TestimonialItem;