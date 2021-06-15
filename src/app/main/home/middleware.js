import { request } from '../../fetchHandler';
import { Actions } from './actions';

export function fetchSocialMedia() {
	return async (dispatch) => {
		const response = await request('GET', '/resources/social-media.json');
		const data = await response.json();
		dispatch(Actions.setSocialMedia(data));
	};
}
