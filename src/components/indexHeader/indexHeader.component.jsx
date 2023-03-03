import classes from './indexHeader.module.css';

import data from './homeData';
import IndexHeaderItems from '../indexHeaderItems/indexHeaderItems';
import { useState, useEffect } from 'react';

const IndexHeader = () => {
  const [index, setIndex] = useState(0);

   useEffect(() => {
     const lastIndex = data.length - 1;
     if (index > lastIndex) {
       setIndex(0);
     }
     const timerId = setInterval(() => {
       setIndex(index + 1);
     }, 6000);
     return () => clearInterval(timerId);
   }, [index]);

  return (
    <section className={classes.container}>
      {data.map((item, itemIndex) => {
        return (
          <div
            key={item.id}
            className={`${classes.item} ${
              index === itemIndex ? classes.show : ""
            }`}
          >
            <IndexHeaderItems item={item} />
          </div>
        );
      })}
    </section>
  );
}
 
export default IndexHeader;