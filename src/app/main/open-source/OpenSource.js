import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchOpenSourceProjects, openSourceProjectsSelector } from './openSourceProjects';
import { ProjectList } from '../../../lib/ProjectList';
import { Main } from '../Main';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';

const Content = styled.div`
  	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;
  	justify-content: center;
  	width: 80%;
`;

export default function OpenSource() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchOpenSourceProjects());
	}, []);

	const openSourceProjects = useSelector(openSourceProjectsSelector);

	return (
		<Main>
			<Title>Open-source</Title>
			<Content>
				<ProjectList projects={openSourceProjects} />
				<ReadingSpace />
			</Content>
		</Main>
	);
}
