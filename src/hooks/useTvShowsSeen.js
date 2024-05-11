import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { tvShowsSeenSlice, tvShowsSeenSelector } from '../store/tvShowsSeenSlice';
import { request } from './requestHandler';

export function useTvShowsSeen() {
	const tvShowsSeen = useSelector(tvShowsSeenSelector);

	const dispatch = useDispatch();
	useEffect(() => {
		request('GET', `${process.env.BLOG_CONTENT_SERVER}/tvShowsSeen.json`)
			.then(response => response.json())
			.then(data => {
				dispatch(tvShowsSeenSlice.actions.setTvShowsSeen(data));
			});
	}, []);

	return tvShowsSeen;
}
