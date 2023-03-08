import classes from './homePage.module.css';

import IndexHeader from '../../components/indexHeader/indexHeader.component';
import Update from '../../components/updateComponent/update.component';
import AboutSection from '../../components/aboutSection/aboutSection.component';
import ServicesSection from '../../components/servicesSection/servicesSection.component';
import TestimonialSection from '../../components/testimonialSection/testimonialSection.component';
import ContactSection from '../../components/contactSection/contactSection.component';

const HomePage = () => {
  return ( 
    <section className={classes.wrapper}>
      <IndexHeader />
      <Update />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
    </section>
   );
}
 
export default HomePage;