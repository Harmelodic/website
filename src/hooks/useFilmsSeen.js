import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { filmsSeen, filmsSeenSelector } from '../store/filmsSeen';
import { request } from './fetchHandler';

export function useFilmsSeen() {
	const filmsSeen = useSelector(filmsSeenSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFilmsSeen());
	}, []);

	return filmsSeen;
}

const blogContentServer = process.env.BLOG_CONTENT_SERVER || '';

export function fetchFilmsSeen() {
	return async dispatch => {
		const response = await request('GET', `${blogContentServer}/posts/filmsSeen.json`);
		const data = await response.json();
		dispatch(filmsSeen.actions.setFilmsSeen(data));
	};
}
