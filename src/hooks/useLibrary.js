import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { librarySlice, librarySelector } from '../store/librarySlice';
import { request } from '../api/apiHandler';

const libraryAPI = process.env.BLOG_API || ''; // Library is currently in the Blog API service

export function useLibrary() {
	const dispatch = useDispatch();
	const library = useSelector(librarySelector);

	useEffect(() => {
		request('GET', `${libraryAPI}/library`)
			.then(response => response.json())
			.then(data => {
				dispatch(librarySlice.actions.setLibrary(data));
			});
	}, []);

	return library;
}
