import { navToggleActionType } from "./navToggleActionType";

const INITIAL_STATE = {
  toggleNavbar: false,
  toggleSubsidiary: false,
  submitForm: true
}

const toggleNavbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case navToggleActionType.NAV_TOGGLE:
      return {
        ...state,
        toggleNavbar: !state.toggleNavbar,
      };
    case navToggleActionType.SUBSIDIARY_TOGGLE:
      return {
        ...state,
        toggleSubsidiary: !state.toggleSubsidiary,
      };
    case navToggleActionType.SUBMIT_FORM:
      return{
        ...state,
        submitForm: action.payload
      }
    default:
      return state;
  }
}

export default toggleNavbarReducer