import { createSlice } from '@reduxjs/toolkit';

export const openSourceProjectsSlice = createSlice({
	name: 'openSourceProjects',
	initialState: [],
	reducers: {
		setOpenSourceProjects: (state, action) => {
			return action.payload;
		},
	},
});

export function openSourceProjectsSelector(state) {
	return state.openSourceProjects;
}
