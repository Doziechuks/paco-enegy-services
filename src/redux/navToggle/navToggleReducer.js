import { navToggleActionType } from "./navToggleActionType";

const INITIAL_STATE = {
  toggleNavbar: false
}

const toggleNavbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case navToggleActionType.NAV_TOGGLE:
      return {
        ...state, 
        toggleNavbar: !state.toggleNavbar
      };
      default:
        return state;
  }
}

export default toggleNavbarReducer