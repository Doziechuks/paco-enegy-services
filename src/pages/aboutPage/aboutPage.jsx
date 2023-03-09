import classes from './aboutPage.module.css';

import PageHeading from '../pageHeading/pageHeading.component';

const AboutPage = () => {
  return (
    <section className={classes.wrapper}>
      <PageHeading background="./images/solar.jpg" title='about us' />
    </section>
  );
}
 
export default AboutPage;