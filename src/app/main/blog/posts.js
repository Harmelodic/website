import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../fetchHandler';

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

const blogAPI = process.env.BLOG_API || '';

export function fetchPosts(done) {
	return async (dispatch) => {
		const response = await request('GET', `${blogAPI}/post`);
		const data = await response.json();

		dispatch(posts.actions.setPosts(data));
		done();
	};
}
