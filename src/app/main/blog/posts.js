import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../fetchHandler';

export const posts = createSlice({
	name: 'posts',
	initialState: {
		value: []
	},
	reducers: {
		setPosts: (state, action) => {
			state.value = action.payload
		}
	}
})

export const postsSelector = (state) => state.posts.value;

export const loadingPostsStatus = createSlice({
	name: 'loadingPostsStatus',
	initialState: {
		value: false
	},
	reducers: {
		started: state => {
			state.value = true
		},
		finished: state => {
			state.value = false
		}
	}
})

export const loadingPostsStatusSelector = (state) => state.loadingPostsStatus.value;

const blogAPI = process.env.BLOG_API || '';

export function fetchPosts() {
	return async (dispatch) => {
		dispatch(loadingPostsStatus.actions.started());

		const response = await request('GET', `${blogAPI}/post`);
		const data = await response.json();

		dispatch(posts.actions.setPosts(data));
		dispatch(loadingPostsStatus.actions.finished());
	};
}
