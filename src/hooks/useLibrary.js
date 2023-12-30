import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchLibrary, librarySelector } from '../store/library';

export function useLibrary() {
	const dispatch = useDispatch();
	const library = useSelector(librarySelector);

	useEffect(() => {
		dispatch(fetchLibrary());
	}, []);

	return library;
}
