import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { library, librarySelector } from '../store/library';
import { request } from '../ui/fetchHandler';

export function useLibrary() {
	const dispatch = useDispatch();
	const library = useSelector(librarySelector);

	useEffect(() => {
		dispatch(fetchLibrary());
	}, []);

	return library;
}

const libraryAPI = process.env.BLOG_API || ''; // Library is currently in the Blog API service

export function fetchLibrary() {
	return async dispatch => {
		const response = await request('GET', `${libraryAPI}/library`);
		const data = await response.json();
		dispatch(library.actions.setLibrary(data));
	};
}
