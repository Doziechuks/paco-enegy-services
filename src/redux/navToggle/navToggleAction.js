import { navToggleActionType } from "./navToggleActionType";

export const handleToggleNavbar = () => ({
  type: navToggleActionType.NAV_TOGGLE
});
export const handleToggleSubsidiary = () => ({
  type: navToggleActionType.SUBSIDIARY_TOGGLE
});
export const handleSubmitForm = (user) => ({
  type:navToggleActionType.SUBMIT_FORM,
  payload: user
});
