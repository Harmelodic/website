import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFilmsSeen, filmsSeenSelector } from '../store/filmsSeenState';

export function useFilmsSeen() {
	const filmsSeen = useSelector(filmsSeenSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFilmsSeen());
	}, []);

	return filmsSeen;
}
