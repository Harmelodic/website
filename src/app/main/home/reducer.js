import { SET_SOCIAL_MEDIA } from './actions';

export function socialMediaReducer(socialMediaState, action) {
	let socialMedia = Object.assign([], socialMediaState);

	switch (action.type) {
		case SET_SOCIAL_MEDIA:
			socialMedia = action.socialMedia;
			break;
	}

	return socialMedia;
};
