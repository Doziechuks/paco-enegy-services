import { combineReducers } from "redux"; 
import toggleNavbarReducer from "./navToggle/navToggleReducer";

export default combineReducers({
  toggleNavbar: toggleNavbarReducer
});