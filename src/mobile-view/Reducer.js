import { SET_MOBILE_VIEW } from './Actions';

export const mobileViewReducer = (state, action) => {
  let mobileView = state;

  switch (action.type) {
    case SET_MOBILE_VIEW:
      mobileView = action.mobileView;
      break;
  }

  return mobileView;
};
