import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
	name: 'posts',
	initialState: [],
	reducers: {
		setPosts: (state, action) => {
			return action.payload;
		},
	},
});

export function postsSelector(state) {
	return state.posts;
}
