import classes from './aboutPage.module.css';

import PageHeading from '../pageHeading/pageHeading.component';

import AboutSection from '../../components/aboutSection/aboutSection.component';
import TestimonialSection from '../../components/testimonialSection/testimonialSection.component';
import MissionVision from '../../components/missionVision/missionVision.component';

const AboutPage = () => {
  return (
    <section className={classes.wrapper}>
      <PageHeading background="./images/solar.jpg" title='about us' />
      <AboutSection isAboutPage />
      <MissionVision />
      <TestimonialSection />
    </section>
  );
}
 
export default AboutPage;