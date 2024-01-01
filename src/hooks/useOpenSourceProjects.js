import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { openSourceProjectsSlice, openSourceProjectsSelector } from '../store/openSourceProjectsSlice';

export function useOpenSourceProjects() {
	const openSourceProjects = useSelector(openSourceProjectsSelector);
	const dispatch = useDispatch();
	const [isLoadingOpenSourceProjects, setLoadingOpenSourceProjects] = useState(false);
	const [
		errorLoadingOpenSourceProjects,
		setErrorLoadingOpenSourceProjects,
	] = useState({ occurred: false, reason: '' });

	useEffect(() => {
		setLoadingOpenSourceProjects(true);
		async function fetchOpenSourceProjects() {
			try {
				const response = await fetch(`${process.env.GITHUB_API}/users/Harmelodic/repos`);
				if (response.ok) {
					const data = await response.json();
					const repositories = data.map(repo => {
						return {
							name: repo.name,
							description: repo.description,
							url: repo.html_url,
						};
					});
					dispatch(openSourceProjectsSlice.actions.setOpenSourceProjects(repositories));
				} else {
					console.error(`Failed to fetch categories. Response: ${response.status}`);
					setErrorLoadingOpenSourceProjects({
						occurred: true,
						reason: response.status.toString(),
					});
				}
			} catch (error) {
				console.error(error);
				setErrorLoadingOpenSourceProjects({
					occurred: true,
					reason: 'Network error',
				});
			} finally {
				setLoadingOpenSourceProjects(false);
			}
		}

		// noinspection JSIgnoredPromiseFromCall - cannot await since useEffect's effect can't be async.
		fetchOpenSourceProjects();
	}, []);

	return {
		openSourceProjects: openSourceProjects,
		isLoadingOpenSourceProjects: isLoadingOpenSourceProjects,
		errorLoadingOpenSourceProjects: errorLoadingOpenSourceProjects,
	};
}
