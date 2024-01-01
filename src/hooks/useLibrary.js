import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { librarySlice, librarySelector } from '../store/librarySlice';

export function useLibrary() {
	const dispatch = useDispatch();
	const library = useSelector(librarySelector);
	const [isLoadingLibrary, setLoadingLibrary] = useState(false);
	const [errorLoadingLibrary, setErrorLoadingLibrary] = useState({ occurred: false, reason: '' });

	useEffect(() => {
		setLoadingLibrary(true);

		async function fetchLibrary() {
			try {
				const response = await fetch(`${process.env.BLOG_API}/library`);
				if (response.ok) {
					const data = await response.json();
					dispatch(librarySlice.actions.setLibrary(data));
				} else {
					console.error(`Failed to fetch categories. Response: ${response.status}`);
					setErrorLoadingLibrary({
						occurred: true,
						reason: response.status.toString(),
					});
				}
			} catch (error) {
				console.error(error);
				setErrorLoadingLibrary({
					occurred: true,
					reason: 'Network error',
				});
			} finally {
				setLoadingLibrary(false);
			}
		}

		// noinspection JSIgnoredPromiseFromCall - cannot await since useEffect's effect can't be async.
		fetchLibrary();
	}, []);

	return {
		library: library,
		isLoadingLibrary: isLoadingLibrary,
		errorLoadingLibrary: errorLoadingLibrary,
	};
}
