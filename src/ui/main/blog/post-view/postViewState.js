import { createSlice } from '@reduxjs/toolkit';
import { request } from '../../../fetchHandler';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export function usePost(postId) {
	const post = useSelector(selectedPostSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPost(postId));

		return function cleanup() {
			dispatch(selectedPost.actions.clear());
		};
	}, []);

	return {
		post: post,
		isPostLoading: post.title === undefined,
	};
}

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
