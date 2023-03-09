import { navToggleActionType } from "./navToggleActionType";

const INITIAL_STATE = {
  toggleNavbar: false,
  toggleSubsidiary: false,
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
    default:
      return state;
  }
}

export default toggleNavbarReducer