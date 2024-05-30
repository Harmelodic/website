import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filmsSeenSlice, filmsSeenSelector } from '../store/filmsSeenSlice';

export function useFilmsSeen() {
	const filmsSeen = useSelector(filmsSeenSelector);
	const dispatch = useDispatch();
	const [isLoadingFilmsSeen, setLoadingFilmsSeen] = useState(true);
	const [errorLoadingFilmsSeen, setErrorLoadingFilmsSeen] = useState({ occurred: false, reason: '' });

	useEffect(() => {
		setLoadingFilmsSeen(true);

		async function fetchFilmsSeen() {
			try {
				const response = await fetch(`${process.env.BLOG_CONTENT_SERVER}/filmsSeen.json`);
				if (response.ok) {
					const data = await response.json();
					dispatch(filmsSeenSlice.actions.setFilmsSeen(data));
				} else {
					console.error(`Failed to fetch films seen. Response: ${response.status}`);
					setErrorLoadingFilmsSeen({
						occurred: true,
						reason: response.status.toString(),
					});
				}
			} catch (error) {
				console.error(error);
				setErrorLoadingFilmsSeen({
					occurred: true,
					reason: 'Network error',
				});
			} finally {
				setLoadingFilmsSeen(false);
			}
		}

		// noinspection JSIgnoredPromiseFromCall - cannot await since useEffect's effect can't be async.
		fetchFilmsSeen()
	}, []);

	return {
		filmsSeen: filmsSeen,
		isLoadingFilmsSeen: isLoadingFilmsSeen,
		errorLoadingFilmsSeen: errorLoadingFilmsSeen,
	};
}
