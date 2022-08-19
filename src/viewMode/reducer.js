import {
	SET_VIEW_MODE_DESKTOP,
	SET_VIEW_MODE_MOBILE,
} from './actions';

export function viewModeReducer(viewModeState, action) {
	let viewMode = viewModeState;

	switch (action.type) {
		case SET_VIEW_MODE_DESKTOP:
			viewMode = 'desktop';
			break;
		case SET_VIEW_MODE_MOBILE:
			viewMode = 'mobile';
			break;
	}

	return viewMode;
}
