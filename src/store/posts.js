import { createSlice } from '@reduxjs/toolkit';

export const posts = createSlice({
	name: 'posts',
	initialState: {
		value: [],
	},
	reducers: {
		setPosts: (state, action) => {
			state.value = action.payload;
		},
	},
});

export function postsSelector(state) {
	return state.posts.value;
}
