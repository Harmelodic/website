import { createSlice } from '@reduxjs/toolkit';

export const creationsSlice = createSlice({
	name: 'creations',
	initialState: [],
	reducers: {
		setCreations: (state, action) => {
			return action.payload;
		},
	},
});

export function creationsSelector(state) {
	return state.creations;
}
