export const SET_SOCIAL_MEDIA = 'SET_SOCIAL_MEDIA';

export class Actions {
	static setSocialMedia(socialMedia) {
		return {
			type: SET_SOCIAL_MEDIA,
			socialMedia: socialMedia,
		};
	}
};
