import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../fetchHandler';

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

export function fetchCreations() {
	return async (dispatch) => {
		const response = await request('GET', '/resources/creations.json');
		const data = await response.json();
		dispatch(creations.actions.setCreations(data));
	};
}

export const creationsSelector = state => state.creations.value;

export default creations.reducer;
