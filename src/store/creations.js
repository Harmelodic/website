import { createSlice } from '@reduxjs/toolkit';

export const creations = createSlice({
	name: 'creations',
	initialState: {
		value: [],
	},
	reducers: {
		setCreations: (state, action) => {
			state.value = action.payload;
		},
	},
});

export function creationsSelector(state) {
	return state.creations.value;
}
