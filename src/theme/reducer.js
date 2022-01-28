import { SET_THEME } from './actions';

export function themeReducer(themeState, action) {
	let theme = themeState;

	switch (action.type) {
		case SET_THEME:
			theme = action.theme;
			break;
	}

	return theme;
}
