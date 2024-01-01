import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { postsSlice, postsSelector } from '../store/postsSlice';

export function usePosts() {
	const dispatch = useDispatch();
	const posts = useSelector(postsSelector);
	const [isLoadingPosts, setLoadingPosts] = useState(true);
	const [errorLoadingPosts, setErrorLoadingPosts] = useState({ occurred: false, reason: '' });

	useEffect(() => {
		setLoadingPosts(true);

		async function fetchPosts() {
			try {
				const response = await fetch(`${process.env.BLOG_API}/post`);
				if (response.ok) {
					const data = await response.json();
					dispatch(postsSlice.actions.setPosts(data));
				} else {
					console.error(`Failed to fetch posts. Response: ${response.status}`);
					setErrorLoadingPosts({
						occurred: true,
						reason: response.status.toString(),
					});
				}
			} catch (error) {
				console.error(error);
				setErrorLoadingPosts({
					occurred: true,
					reason: 'Network error',
				});
			} finally {
				setLoadingPosts(false);
			}
		}

		// noinspection JSIgnoredPromiseFromCall - cannot await since useEffect's effect can't be async.
		fetchPosts();
	}, []);

	return {
		posts: posts,
		isLoadingPosts: isLoadingPosts,
		errorLoadingPosts: errorLoadingPosts,
	};
}
