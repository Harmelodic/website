import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOpenSourceProjects } from './middleware';
import { ProjectList } from '../ProjectList';

export default function OpenSource(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		props.updatePath();
		dispatch(fetchOpenSourceProjects());
	}, []);

	const openSourceProjects = useSelector(store => store.openSourceProjects);

	return (
		<ProjectList projects={openSourceProjects} />
	);
}
