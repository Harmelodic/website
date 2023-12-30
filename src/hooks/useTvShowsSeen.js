import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { tvShowsSeen, tvShowsSeenSelector } from '../store/tvShowsSeen';
import { request } from './fetchHandler';

export function useTvShowsSeen() {
	const tvShowsSeen = useSelector(tvShowsSeenSelector);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTvShowsSeen());
	}, []);

	return tvShowsSeen;
}

const blogContentServer = process.env.BLOG_CONTENT_SERVER || '';

export function fetchTvShowsSeen() {
	return async dispatch => {
		const response = await request('GET', `${blogContentServer}/posts/tvShowsSeen.json`);
		const data = await response.json();
		dispatch(tvShowsSeen.actions.setTvShowsSeen(data));
	};
}
