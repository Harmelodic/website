import { createSlice } from '@reduxjs/toolkit';

export const openSourceProjectsSlice = createSlice({
	name: 'openSourceProjects',
	initialState: {
		value: [],
	},
	reducers: {
		setOpenSourceProjects: (state, action) => {
			state.value = action.payload;
		},
	},
});

export function openSourceProjectsSelector(state) {
	return state.openSourceProjects.value;
}
