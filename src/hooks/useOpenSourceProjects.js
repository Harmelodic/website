import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { openSourceProjectsSlice, openSourceProjectsSelector } from '../store/openSourceProjectsSlice';
import { request } from '../api/apiHandler';

export function useOpenSourceProjects() {
	const openSourceProjects = useSelector(openSourceProjectsSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		request('GET', 'https://api.github.com/users/Harmelodic/repos')
			.then(response => response.json())
			.then(data => {
				const repositories = data.map(repo => {
					return {
						name: repo.name,
						description: repo.description,
						url: repo.html_url,
					};
				});
				dispatch(openSourceProjectsSlice.actions.setOpenSourceProjects(repositories));
			});
	}, []);

	return openSourceProjects;
}
