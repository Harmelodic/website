import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPosts, postsSelector } from '../store/posts';

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
