import classes from './homePage.module.css';

import IndexHeader from '../../components/indexHeader/indexHeader.component';

const HomePage = () => {
  return ( 
    <section className={classes.wrapper}>
      <IndexHeader />
    </section>
   );
}
 
export default HomePage;