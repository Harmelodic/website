import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../fetchHandler';

export const openSourceProjects = createSlice({
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

export function fetchOpenSourceProjects() {
	return async dispatch => {
		const response= await request('GET', 'https://api.github.com/users/Harmelodic/repos');
		const data = await response.json();
		const repositories = data.map(repo => {
			return {
				name: repo.name,
				description: repo.description,
				url: repo.html_url,
			};
		});
		dispatch(openSourceProjects.actions.setOpenSourceProjects(repositories));
	};
}

export function openSourceProjectsSelector(state) {
	return state.openSourceProjects.value;
}
