import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOpenSourceProjects } from './middleware';
import { ProjectList } from '../../../lib/ProjectList';
import { Main } from '../Main';
import { ReadingSpace } from '../../../lib/ReadingSpace';

export default function OpenSource(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		props.updatePath();
		dispatch(fetchOpenSourceProjects());
	}, []);

	const openSourceProjects = useSelector(store => store.openSourceProjects);

	return (
		<Main>
			<ProjectList projects={openSourceProjects} />
			<ReadingSpace />
		</Main>
	);
}
