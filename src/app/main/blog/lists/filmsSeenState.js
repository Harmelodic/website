import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../../fetchHandler';

export const filmsSeen = createSlice({
	name: 'filmsSeen',
	initialState: {
		value: [],
	},
	reducers: {
		setFilmsSeen: (state, action) => {
			state.value = action.payload;
		},
	},
});

export function filmsSeenSelector(state) {
	return state.filmsSeen.value;
}

const blogContentServer = process.env.BLOG_CONTENT_SERVER || '';

export function fetchFilmsSeen() {
	return async dispatch => {
		const response = await request('GET', `${blogContentServer}/posts/filmsSeen.json`);
		const data = await response.json();
		dispatch(filmsSeen.actions.setFilmsSeen(data));
	};
}
