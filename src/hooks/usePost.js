import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectedPostSlice, selectedPostSelector } from '../store/selectedPostSlice';

export function usePost(postId) {
	const post = useSelector(selectedPostSelector);
	const dispatch = useDispatch();
	const [isPostLoading, setIsPostLoading] = useState(true);
	const [errorLoadingPost, setErrorLoadingPost] = useState({ occurred: false, reason: '' });

	useEffect(() => {
		setIsPostLoading(true);

		async function fetchPost() {
			try {
				const response = await fetch(`${process.env.BLOG_API}/post/${postId}`);
				if (response.ok) {
					const data = await response.json();
					dispatch(selectedPostSlice.actions.setSelectedPost(data));
				} else {
					console.error(`Failed to fetch post. Response: ${response.status}`);
					setErrorLoadingPost({
						occurred: true,
						reason: response.status.toString(),
					});
				}
			} catch (error) {
				console.error(error);
				setErrorLoadingPost({
					occurred: true,
					reason: 'Network error',
				});
			} finally {
				setIsPostLoading(false);
			}
		}

		// noinspection JSIgnoredPromiseFromCall - cannot await since useEffect's effect can't be async.
		fetchPost();

		return function cleanup() {
			dispatch(selectedPostSlice.actions.clear());
		};
	}, []);

	return {
		post: post,
		isPostLoading: isPostLoading,
		errorLoadingPost: errorLoadingPost,
	};
}
