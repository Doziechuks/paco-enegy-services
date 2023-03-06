import classes from './servicesSection.module.css';

import { servicesData } from './servicesData';
import ServicesItem from '../servicesItems/servicesItem.component';

import Title from '../titleComponent/title.component';

const ServicesSection = () => {
  return (
    <section className={classes.wrapper}>
      <Title heading={"our"} title={"services"} isService />
      <div className={classes.servicesBox}>
        {servicesData.map((item) => {
          return <ServicesItem key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}
 
export default ServicesSection;