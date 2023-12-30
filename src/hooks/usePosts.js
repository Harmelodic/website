import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { posts, postsSelector } from '../store/posts';
import { request } from './fetchHandler';

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

const blogAPI = process.env.BLOG_API || '';

export function fetchPosts(done) {
	return async dispatch => {
		const response = await request('GET', `${blogAPI}/post`);
		const data = await response.json();

		dispatch(posts.actions.setPosts(data));
		done();
	};
}
