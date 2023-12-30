import { createSlice } from '@reduxjs/toolkit';
import { request } from '../ui/fetchHandler';

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

const blogAPI = process.env.BLOG_API || '';

export function fetchPost(id) {
	return async dispatch => {
		const response = await request('GET', `${blogAPI}/post/${id}`);
		const data = await response.json();
		dispatch(selectedPost.actions.setSelectedPost(data));
	};
}
