import { createSlice } from '@reduxjs/toolkit';

export const selectedPost = createSlice({
	name: 'selectedPost',
	initialState: {
		value: {},
	},
	reducers: {
		setSelectedPost: (state, action) => {
			state.value = action.payload;
		},
		clear: state => {
			state.value = {};
		},
	},
});

export function selectedPostSelector(state) {
	return state.selectedPost.value;
}
