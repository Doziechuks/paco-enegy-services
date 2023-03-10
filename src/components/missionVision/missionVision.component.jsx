import classes from './missionVision.module.css';

import Title from '../titleComponent/title.component';
import CoreValues from '../coreValues/corevalues.component';
import MissionVisionContainer from '../mission/mission.component';

 const MissionVision = () => {
  return (
    <section className={classes.wrapper}>
      <Title heading="our" title="mission and vision" isAboutPage />
      <div className={classes.container}>
        <CoreValues />
        <MissionVisionContainer
          title="our mission"
          mission="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam, quo officia sed fugit amet veniam iste eligendi odio voluptate"
          isMission
        />
        <MissionVisionContainer
          title="our vision"
          mission="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam, quo officia sed fugit amet veniam iste eligendi odio"
          isVision
        />
      </div>
    </section>
  );
}
 
export default MissionVision;