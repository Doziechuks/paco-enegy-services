import classes from './missionVision.module.css';

import Title from '../titleComponent/title.component';
import CoreValues from '../coreValues/corevalues.component';

 const MissionVision = () => {
  return ( 
    <section className={classes.wrapper}>
      <Title heading='our' title='mission and vision' isAboutPage />
      <div className={classes.container}>
        <CoreValues />
      </div>
    </section>
   );
}
 
export default MissionVision;