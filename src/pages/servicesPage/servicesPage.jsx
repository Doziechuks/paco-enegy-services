import classes from './servicesPage.module.css';

import { connect } from 'react-redux';
import { selectServicesCollection } from '../../redux/services/servicesSelector';

import PageHeading from '../pageHeading/pageHeading.component';
import Offers from '../../components/offers/offers.component';
import PhotoGallery from '../../components/photoGallery/photoGallery.component';

const ServicesPage = ({ servicesCollection }) => {
  console.log({servicesCollection});
  const { title, backgroundImage, info, services, photoGallery } = servicesCollection;
  return (
    <section className={classes.wrapper}>
      <PageHeading background={backgroundImage} title={title} />
      <div className={classes.container}>
        <div className={classes.infoBox}>
          <p>{info}</p>
          {
            services.map((items, index) => {
              return <Offers key={index} items={items} />
            })
          }
        </div>
        <div className={classes.photosBox}>
          {
            photoGallery.map((photos, index) => {
              return <PhotoGallery key={index} photos={photos} />
            })
          }
        </div>
      </div>
    </section>
  );
}
 
const mapStateToProps = (state, ownProps) => ({
  servicesCollection: selectServicesCollection(ownProps.match.params.servicesId)(state)
});
export default connect(mapStateToProps)(ServicesPage);