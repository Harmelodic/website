import { createSlice } from '@reduxjs/toolkit';

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

export function librarySelector(state) {
	return state.library.value;
}
