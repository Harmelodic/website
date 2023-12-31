import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { postsSlice, postsSelector } from '../store/postsSlice';
import { request } from './api-registry';

export function usePosts() {
	const dispatch = useDispatch();
	const posts = useSelector(postsSelector);
	const [isLoadingPosts, setLoadingPosts] = useState(true);

	useEffect(() => {
		setLoadingPosts(true);
		request('GET', `${process.env.BLOG_API}/post`)
			.then(response => response.json())
			.then(data => {
				dispatch(postsSlice.actions.setPosts(data));
				setLoadingPosts(false);
			});
	}, []);

	return {
		posts: posts,
		isLoadingPosts: isLoadingPosts,
	};
}
