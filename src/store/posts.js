import { createSlice } from '@reduxjs/toolkit';
import { request } from '../ui/fetchHandler';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export function usePosts() {
	const dispatch = useDispatch();
	const posts = useSelector(postsSelector);
	const [isLoadingPosts, setLoadingPosts] = useState(true);

	useEffect(() => {
		setLoadingPosts(true);
		dispatch(fetchPosts(() => setLoadingPosts(false)));
	}, []);

	return {
		posts: posts,
		isLoadingPosts: isLoadingPosts,
	};
}

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
	return async dispatch => {
		const response = await request('GET', `${blogAPI}/post`);
		const data = await response.json();

		dispatch(posts.actions.setPosts(data));
		done();
	};
}
