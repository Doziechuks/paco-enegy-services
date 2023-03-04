import classes from './homePage.module.css';

import IndexHeader from '../../components/indexHeader/indexHeader.component';
import Update from '../../components/updateComponent/update.component';

const HomePage = () => {
  return ( 
    <section className={classes.wrapper}>
      <IndexHeader />
      <Update />
    </section>
   );
}
 
export default HomePage;