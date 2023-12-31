import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { librarySlice, librarySelector } from '../store/librarySlice';
import { request } from './api-registry';

export function useLibrary() {
	const dispatch = useDispatch();
	const library = useSelector(librarySelector);

	useEffect(() => {
		request('GET', `${process.env.BLOG_API}/library`)
			.then(response => response.json())
			.then(data => {
				dispatch(librarySlice.actions.setLibrary(data));
			});
	}, []);

	return library;
}
