import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../../fetchHandler';

export const tvShowsSeen = createSlice({
	name: 'tvShowsSeen',
	initialState: {
		value: [],
	},
	reducers: {
		setTvShowsSeen: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const tvShowsSeenSelector = state => state.tvShowsSeen.value;

export default tvShowsSeen.reducer;

const blogContentServer = process.env.BLOG_CONTENT_SERVER || '';

export function fetchTvShowsSeen() {
	return async (dispatch) => {
		const response = await request('GET', `${blogContentServer}/posts/tvShowsSeen.json`);
		const data = await response.json();
		dispatch(tvShowsSeen.actions.setTvShowsSeen(data));
	};
}
