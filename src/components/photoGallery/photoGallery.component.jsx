import classes from './photoGallery.module.css';

const PhotoGallery = ({photos}) => {
  return ( 
    <img src={photos} alt="" className={classes.photo} />
   );
}
 
export default PhotoGallery;