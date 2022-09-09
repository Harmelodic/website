import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../fetchHandler';

export const openSourceProjects = createSlice({
	name: 'openSourceProjects',
	initialState: {
		value: []
	},
	reducers: {
		setOpenSourceProjects: (state, action) => {
			state.value = action.payload
		},
	}
})

export function fetchOpenSourceProjects() {
	return async (dispatch) => {
		const response = await request('GET', '/resources/open-source.json');
		const data = await response.json();
		dispatch(openSourceProjects.actions.setOpenSourceProjects(data));
	};
}

export const openSourceProjectsSelector = (state) => state.openSourceProjects.value;

export default openSourceProjects.reducer;
