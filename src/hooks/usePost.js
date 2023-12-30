import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost, selectedPost, selectedPostSelector } from '../store/postView';

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
