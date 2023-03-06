import classes from './servicesItem.module.css';

import { useHistory } from 'react-router-dom';

import CustomButton from "../customButton/customButton";

const ServicesItem = ({ item }) => {
  const { title, imageUrl, linkUrl, whatsappUrl, noMargin} = item;
  const history = useHistory();

  return (
    <section className={`${classes.wrapper} ${noMargin && classes.noMargin}`}>
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <span>{title}</span>
      </div>
      <div className={classes.buttonBox}>
        <CustomButton isVisit>Visit Page</CustomButton>
        <a href={`${whatsappUrl}`} target='blank' className={classes.whatsappLink}>
          <CustomButton isGetToUs>Get to us</CustomButton>
        </a>
      </div>
    </section>
  );
}
 
export default ServicesItem;