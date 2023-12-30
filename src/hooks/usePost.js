import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectedPost, selectedPostSelector } from '../store/postView';
import { request } from '../ui/fetchHandler';

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

const blogAPI = process.env.BLOG_API || '';

export function fetchPost(id) {
	return async dispatch => {
		const response = await request('GET', `${blogAPI}/post/${id}`);
		const data = await response.json();
		dispatch(selectedPost.actions.setSelectedPost(data));
	};
}
