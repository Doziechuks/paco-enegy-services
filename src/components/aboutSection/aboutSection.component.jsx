import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './aboutSection.module.css';

import CustomButton from '../customButton/customButton';
import Title from '../titleComponent/title.component';

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
    if (window.scrollY >= 700) {
      setMobileSlide(true);
    } else {
      setMobileSlide(false);
    }
    if (window.scrollY >= 250) {
      setAboutMobileSlide(true);
    } else {
      setAboutMobileSlide(false);
    }
    if (window.scrollY >= 1000) {
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
        <div
          className={`${classes.background} ${
            showSectionSlide ? classes.showBackground : ""
          } ${isAboutPage && classes.showBackground}`}
          style={{
            backgroundImage: "url('./images/landingPagepng.png')",
          }}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            molestiae sunt. Sapiente at maxime voluptate, itaque optio aperiam.
            Consequuntur, repudiandae dolorem distinctio ex eveniet debitis
            recusandae, asperiores quae consectetur sint aspernatur minus
            obcaecati praesentium dolores! Veniam, explicabo vel atque
            asperiores aspernatur in molestiae, ratione laudantium recusandae
            iusto excepturi odio, voluptatem commodi placeat adipisci. Deleniti
            repudiandae pariatur dicta tempora facere voluptatum itaque
          </span>

          <span
            className={` ${classes.spanMobile} ${
              mobileSlide2 ? classes.mobileShow : ""
            } ${isAboutPage && aboutMobileSlide2 ? classes.mobileShow : ""}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            molestiae sunt. Sapiente at maxime voluptate, itaque optio aperiam.
            Consequuntur, repudiandae dolorem distinctio ex eveniet debitis
            recusandae, asperiores quae consectetur sint aspernatur minus
            obcaecati praesentium dolores! Veniam, explicabo vel atque
            asperiores aspernatur in molestiae, ratione laudantium recusandae
            iusto excepturi odio, voluptatem commodi placeat adipisci. Deleniti
            repudiandae pariatur dicta tempora facere voluptatum itaque
            distinctio impedit non obcaecati dolore, accusantium quidem quasi
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