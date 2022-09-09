import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../fetchHandler';

export const socialMedia = createSlice({
	name: 'socialMedia',
	initialState: {
		value: []
	},
	reducers: {
		setSocialMedia: (state, action) => {
			state.value = action.payload
		},
	}
})

export function fetchSocialMedia() {
	return async (dispatch) => {
		const response = await request('GET', '/resources/social-media.json');
		const data = await response.json();
		dispatch(socialMedia.actions.setSocialMedia(data));
	};
}

export const socialMediaSelector = (state) => state.socialMedia.value;

export default socialMedia.reducer;
