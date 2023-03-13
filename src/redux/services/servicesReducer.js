import { servicesPageData } from "../../pages/servicesPage/servicesPageData";

const INITIAL_STATE = {
  services: servicesPageData
};

const servicesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default servicesReducer