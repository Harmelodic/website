import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { openSourceProjects, openSourceProjectsSelector } from '../store/openSourceProjects';
import { request } from '../ui/fetchHandler';

export function useOpenSourceProjects() {
	const openSourceProjects = useSelector(openSourceProjectsSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchOpenSourceProjects());
	}, []);

	return openSourceProjects;
}

export function fetchOpenSourceProjects() {
	return async dispatch => {
		const response= await request('GET', 'https://api.github.com/users/Harmelodic/repos');
		const data = await response.json();
		const repositories = data.map(repo => {
			return {
				name: repo.name,
				description: repo.description,
				url: repo.html_url,
			};
		});
		dispatch(openSourceProjects.actions.setOpenSourceProjects(repositories));
	};
}
