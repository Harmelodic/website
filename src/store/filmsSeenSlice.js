import { createSlice } from '@reduxjs/toolkit';

export const filmsSeenSlice = createSlice({
	name: 'filmsSeen',
	initialState: [],
	reducers: {
		setFilmsSeen: (state, action) => {
			return action.payload;
		},
	},
});

export function filmsSeenSelector(state) {
	return state.filmsSeen;
}
