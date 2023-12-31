import { createSlice } from '@reduxjs/toolkit';

export const tvShowsSeenSlice = createSlice({
	name: 'tvShowsSeen',
	initialState: [],
	reducers: {
		setTvShowsSeen: (state, action) => {
			return action.payload;
		},
	},
});

export function tvShowsSeenSelector(state) {
	return state.tvShowsSeen;
}
