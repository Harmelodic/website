import { createSlice } from '@reduxjs/toolkit';

export const tvShowsSeenSlice = createSlice({
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

export function tvShowsSeenSelector(state) {
	return state.tvShowsSeen.value;
}
