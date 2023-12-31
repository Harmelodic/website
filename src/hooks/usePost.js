import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectedPostSlice, selectedPostSelector } from '../store/selectedPostSlice';
import { request } from './requestHandler';

export function usePost(postId) {
	const post = useSelector(selectedPostSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		request('GET', `${process.env.BLOG_API}/post/${postId}`)
			.then(response => response.json())
			.then(data => {
				dispatch(selectedPostSlice.actions.setSelectedPost(data));
			});

		return function cleanup() {
			dispatch(selectedPostSlice.actions.clear());
		};
	}, []);

	return {
		post: post,
		isPostLoading: post.title === undefined,
	};
}
