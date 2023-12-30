import { createSlice } from '@reduxjs/toolkit';

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
