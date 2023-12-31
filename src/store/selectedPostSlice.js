import { createSlice } from '@reduxjs/toolkit';

export const selectedPostSlice = createSlice({
	name: 'selectedPost',
	initialState: {},
	reducers: {
		setSelectedPost: (state, action) => {
			return action.payload;
		},
		clear: () => {
			return {};
		},
	},
});

export function selectedPostSelector(state) {
	return state.selectedPost;
}
