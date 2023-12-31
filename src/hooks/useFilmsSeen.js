import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { filmsSeenSlice, filmsSeenSelector } from '../store/filmsSeenSlice';
import { request } from '../api/apiHandler';

const blogContentServer = process.env.BLOG_CONTENT_SERVER || '';

export function useFilmsSeen() {
	const filmsSeen = useSelector(filmsSeenSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		request('GET', `${blogContentServer}/posts/filmsSeen.json`)
			.then(response => response.json())
			.then(data => {
				dispatch(filmsSeenSlice.actions.setFilmsSeen(data));
			});
	}, []);

	return filmsSeen;
}
