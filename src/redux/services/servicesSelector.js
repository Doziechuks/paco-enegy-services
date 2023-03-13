import { createSelector } from "reselect";

const selectServices = (state) => state.services;

export const selectPacoServices = createSelector(
  [selectServices],
  (service) => service.services
);

export const selectServicesCollection = (servicesUrlParam) => {
  return createSelector(
    [selectPacoServices],
    (services) => services[servicesUrlParam]
  );
};