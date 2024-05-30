import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { tvShowsSeenSelector, tvShowsSeenSlice } from "../store/tvShowsSeenSlice";

export function useTvShowsSeen() {
	const tvShowsSeen = useSelector(tvShowsSeenSelector);
	const dispatch = useDispatch();
	const [isLoadingTVShowsSeen, setLoadingTVShowsSeen] = useState(true);
	const [errorLoadingTVShowsSeen, setErrorLoadingTVShowsSeen] = useState({ occurred: false, reason: '' });

	useEffect(() => {
		setLoadingTVShowsSeen(true);

		async function fetchTVShowsSeen() {
			try {
				const response = await fetch(`${process.env.BLOG_CONTENT_SERVER}/tvShowsSeen.json`);
				if (response.ok) {
					const data = await response.json();
					dispatch(tvShowsSeenSlice.actions.setTvShowsSeen(data));
				} else {
					console.error(`Failed to fetch films seen. Response: ${response.status}`);
					setErrorLoadingTVShowsSeen({
						occurred: true,
						reason: response.status.toString(),
					});
				}
			} catch (error) {
				console.error(error);
				setErrorLoadingTVShowsSeen({
					occurred: true,
					reason: 'Network error',
				});
			} finally {
				setLoadingTVShowsSeen(false);
			}
		}

		// noinspection JSIgnoredPromiseFromCall - cannot await since useEffect's effect can't be async.
		fetchTVShowsSeen()
	}, []);

	return {
		tvShowsSeen: tvShowsSeen,
		isLoadingTVShowsSeen: isLoadingTVShowsSeen,
		errorLoadingTVShowsSeen: errorLoadingTVShowsSeen,
	};
}
