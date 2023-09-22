import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../fetchHandler';

export const library = createSlice({
	name: 'library',
	initialState: {
		value: [],
	},
	reducers: {
		setLibrary: (state, action) => {
			state.value = action.payload;
		},
	},
});

const libraryAPI = process.env.BLOG_API || ''; // Library is currently in the Blog API service

export function fetchLibrary() {
	return async dispatch => {
		const response = await request('GET', `${libraryAPI}/library`);
		const data = await response.json();
		dispatch(library.actions.setLibrary(data));
	};
}

export function librarySelector(state) {
	return state.library.value;
}
