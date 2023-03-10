import classes from './testimonialSection.module.css';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import testimonialData from './testimonialData';
import Title from '../titleComponent/title.component';
import TestimonialItem from '../testimonialItems/testimonialItem.component';
import { useState, useEffect } from 'react';

const TestimonialSection = () => {
  const [index, setIndex] = useState(0)

    useEffect(() => {
      const lastIndex = testimonialData.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, testimonialData]);

    useEffect(() => {
      const timerId = setInterval(() => {
        setIndex(index + 1);
      }, 4000);

      return () => clearInterval(timerId);
    }, [index]);

  return (
    <section className={classes.wrapper}>
      <Title heading="some" title="testimonials" isTestimonial />
      {/* <Title heading="some" title="testimonials" isAboutPage /> */}
      <div className={classes.container}>
        {testimonialData.map((items, itemsIndex) => {
          let slidePosition = `${classes.nextSlide}`;

          if (itemsIndex === index) {
            slidePosition = `${classes.activeSlide}`;
          }
          if (
            itemsIndex === index - 1 ||
            (index === 0 && itemsIndex === testimonialData.length - 1)
          ) {
            slidePosition = `${classes.lastSlide}`;
          }
          return (
            <div
              className={`${classes.contentWrapper} ${slidePosition}`}
              key={items.id}
            >
              <TestimonialItem items={items} />
            </div>
          );
        })}
        <div className={classes.arrows}>
          <div
            className={classes.arrowLeft}
            onClick={() => setIndex(index - 1)}
          >
            <FaAngleLeft className={classes.arrowFont} />
          </div>
          <div
            className={classes.arrowRight}
            onClick={() => setIndex(index + 1)}
          >
            <FaAngleRight className={classes.arrowFont} />
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default TestimonialSection;