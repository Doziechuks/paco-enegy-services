import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './aboutSection.module.css';

import CustomButton from '../customButton/customButton';

const AboutSection = () => {

  const [showTitle, setShowTitle] = useState(false);
  const [mobileSlide, setMobileSlide] = useState(false);
  const [mobileSlide2, setMobileSlide2] = useState(false);
  const [mobileSlideButton, setMobileSlideButton] = useState(false);
  const history = useHistory();

  const showSection = () => {
    if (window.scrollY >= 50) {
      setShowTitle(true);
    } else {
      setShowTitle(false);
    }
    if(window.scrollY >= 700){
      setMobileSlide(true);
    }else{
      setMobileSlide(false);
    }
    if (window.scrollY >= 1000) {
      setMobileSlide2(true);
    } else {
      setMobileSlide2(false);
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
      <div className={classes.titleBox}>
        <h1
          className={`${classes.title} ${showTitle ? classes.showTitle : ""}`}
        >
          {" "}
          <span>about</span> our comapny
        </h1>
      </div>
      <div className={classes.contentBox}>
        <div
          className={`${classes.background} ${
            showTitle ? classes.showBackground : ""
          }`}
          style={{
            backgroundImage: "url('./images/solar.jpg')",
          }}
        />
        <p
          className={`${classes.content} ${
            showTitle ? classes.showBackground : ""
          }`}
        >
          <span
            className={` ${classes.spanMobile} ${
              mobileSlide ? classes.mobileShow : ""
            }`}
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
            }`}
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
          <div className={`${classes.buttonBox} ${mobileSlideButton ? classes.mobileShow : ''}`}>
            <CustomButton onClick={() => history.push("/about")}>
              more info
            </CustomButton>
          </div>
        </p>
      </div>
    </section>
  );
}
 
export default AboutSection;