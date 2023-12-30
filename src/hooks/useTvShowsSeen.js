import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTvShowsSeen, tvShowsSeenSelector } from '../store/tvShowsSeenState';

export function useTvShowsSeen() {
	const tvShowsSeen = useSelector(tvShowsSeenSelector);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTvShowsSeen());
	}, []);

	return tvShowsSeen;
}
