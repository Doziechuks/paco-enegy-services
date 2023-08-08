import classes from "./missionVision.module.css";

import Title from "../titleComponent/title.component";
import CoreValues from "../coreValues/corevalues.component";
import MissionVisionContainer from "../mission/mission.component";

const MissionVision = () => {
  return (
    <section className={classes.wrapper}>
      <Title heading="our" title="mission and vision" isAboutPage />
      <div className={classes.container}>
        <CoreValues />
        <MissionVisionContainer
          title="our mission"
          mission="To accelerate the adoption of solar energy as a mainstream power source. We aim to provide our clients with high-quality, reliable, and customized solar solutions that not only meet their energy needs but also align with their environmental values. By offering innovative solar technologies and exceptional service, we strive to create a cleaner, more sustainable world for current and future generations."
          isMission
        />
        <MissionVisionContainer
          title="our vision"
          mission="To lead the global transition to a cleaner, more sustainable future through the widespread adoption of solar energy. We envision a world where renewable energy is the cornerstone of power generation, enabling individuals, businesses, and communities to thrive while minimizing environmental impact."
          isVision
        />
      </div>
    </section>
  );
};

export default MissionVision;
