export const SET_VIEW_MODE_DESKTOP = 'SET_VIEW_MODE_DESKTOP';
export const SET_VIEW_MODE_MOBILE = 'SET_VIEW_MODE_MOBILE';

export function setViewModeToDesktop() {
	return {
		type: SET_VIEW_MODE_DESKTOP,
	};
}

export function setViewModeToMobile() {
	return {
		type: SET_VIEW_MODE_MOBILE,
	};
}
