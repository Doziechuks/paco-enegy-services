import classes from './servicesSection.module.css';

import Title from '../titleComponent/title.component';

const ServicesSection = () => {
  return ( 
    <section className={classes.wrapper}>
      <Title heading={'our'} title={'services'} isService />
    </section>
   );
}
 
export default ServicesSection;