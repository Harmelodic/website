import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { postsSlice, postsSelector } from '../store/postsSlice';
import { request } from '../api/apiHandler';

const blogAPI = process.env.BLOG_API || '';

export function usePosts() {
	const dispatch = useDispatch();
	const posts = useSelector(postsSelector);
	const [isLoadingPosts, setLoadingPosts] = useState(true);

	useEffect(() => {
		setLoadingPosts(true);
		request('GET', `${blogAPI}/post`)
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
