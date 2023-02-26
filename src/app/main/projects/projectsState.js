import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../fetchHandler';

export const projects = createSlice({
	name: 'projects',
	initialState: {
		value: [],
	},
	reducers: {
		setProjects: (state, action) => {
			state.value = action.payload;
		},
	},
});

export function fetchProjects() {
	return async (dispatch) => {
		const response = await request('GET', '/resources/projects.json');
		const data = await response.json();
		dispatch(projects.actions.setProjects(data));
	};
}

export const projectsSelector = state => state.projects.value;

export default projects.reducer;
