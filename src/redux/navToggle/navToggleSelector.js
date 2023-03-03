import { createSelector } from "reselect";

const selectToggle = state => state.toggleNavbar

export const selectToggleNavbar = createSelector(
  [selectToggle],
  (toggle) => toggle.toggleNavbar
);