import { combineReducers } from "redux"; 
import toggleNavbarReducer from "./navToggle/navToggleReducer";
import servicesReducer from "./services/servicesReducer";

export default combineReducers({
  toggleNavbar: toggleNavbarReducer,
  services: servicesReducer
});