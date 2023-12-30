import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchOpenSourceProjects, openSourceProjectsSelector } from '../store/openSourceProjects';

export function useOpenSourceProjects() {
	const openSourceProjects = useSelector(openSourceProjectsSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchOpenSourceProjects());
	}, []);

	return openSourceProjects;
}
