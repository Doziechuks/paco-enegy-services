import { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./aboutSection.module.css";

import CustomButton from "../customButton/customButton";
import Title from "../titleComponent/title.component";

const AboutSection = ({ isAboutPage }) => {
  const [showSectionSlide, setShowSectionSlide] = useState(false);
  const [mobileSlide, setMobileSlide] = useState(false);
  const [aboutMobileSlide, setAboutMobileSlide] = useState(false);
  const [mobileSlide2, setMobileSlide2] = useState(false);
  const [aboutMobileSlide2, setAboutMobileSlide2] = useState(false);
  const [mobileSlideButton, setMobileSlideButton] = useState(false);
  const history = useHistory();

  const showSection = () => {
    if (window.scrollY >= 250) {
      setShowSectionSlide(true);
    } else {
      setShowSectionSlide(false);
    }
    if (window.scrollY >= 500) {
      setMobileSlide(true);
    } else {
      setMobileSlide(false);
    }
    if (window.scrollY >= 250) {
      setAboutMobileSlide(true);
    } else {
      setAboutMobileSlide(false);
    }
    if (window.scrollY >= 900) {
      setMobileSlide2(true);
    } else {
      setMobileSlide2(false);
    }
    if (window.scrollY >= 500) {
      setAboutMobileSlide2(true);
    } else {
      setAboutMobileSlide2(false);
    }
    if (window.scrollY >= 1100) {
      setMobileSlideButton(true);
    } else {
      setMobileSlideButton(false);
    }
  };
  window.addEventListener("scroll", showSection);

  return (
    <section className={classes.wrapper}>
      <Title heading={"about"} title={"our company"} isAbout />
      <div className={classes.contentBox}>
        <img
          src="./images/landingPagepng.png"
          alt="background"
          className={`${classes.backgroundImg} ${
            showSectionSlide ? classes.showBackground : ""
          } ${isAboutPage && classes.showBackground}`}
        />
        <div
          className={`${classes.content} ${
            showSectionSlide ? classes.showBackground : ""
          } ${isAboutPage && classes.showBackground}`}
        >
          <span
            className={` ${classes.spanMobile} ${
              mobileSlide ? classes.mobileShow : ""
            } ${isAboutPage && aboutMobileSlide ? classes.mobileShow : ""}`}
          >
            PACO Energy services is a forward-thinking solar installation
            company on a mission to revolutionize the way individuals and
            businesses access clean, renewable energy. Our core belief is that
            sustainable power should be accessible to everyone, driving us to
            specialize in designing, installing, and maintaining cutting-edge
            solar power systems. By seamlessly integrating advanced technology,
            personalized service, and environmental stewardship, we empower our
            clients to not only slash energy costs but also significantly reduce
            their carbon footprint.
          </span>

          <span
            className={` ${classes.spanMobile} ${
              mobileSlide2 ? classes.mobileShow : ""
            } ${isAboutPage && aboutMobileSlide2 ? classes.mobileShow : ""}`}
          >
            At PACO Energy services, our driving force is the shared vision of a
            greener world powered by renewable energy. Our comprehensive range
            of services caters to residential, commercial, and industrial
            clients
          </span>
          <div
            className={`${classes.buttonBox} ${
              mobileSlideButton ? classes.mobileShow : ""
            } ${isAboutPage && classes.hide}`}
          >
            <CustomButton onClick={() => history.push("/about")}>
              more info
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
