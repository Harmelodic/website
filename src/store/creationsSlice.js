import { createSlice } from '@reduxjs/toolkit';

export const creationsSlice = createSlice({
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
