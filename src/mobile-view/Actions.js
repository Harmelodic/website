export const SET_MOBILE_VIEW = 'SET_MOBILE_VIEW';

export default class Actions {
  static setMobileView(mobileView) {
    return {
      type: SET_MOBILE_VIEW,
      mobileView,
    };
  }
};
