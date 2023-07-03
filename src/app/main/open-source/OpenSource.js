import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchOpenSourceProjects, openSourceProjectsSelector } from './openSourceProjects';
import { Main } from '../Main';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';
import { OpenSourceProjectEntry } from '../../../lib/OpenSourceProjectEntry';
import { ColumnInfoBox } from '../../../lib/InfoBox';
import { FlexDiv } from '../../../lib/FlexDiv';

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
			<Title>Open Source</Title>
			<ColumnInfoBox>
				<FlexDiv>
					<span>Sourced from </span>
					<a href="https://github.com/Harmelodic?tab=repositories"
					   target="_blank"
					   rel="noopener">my GitHub</a>:
				</FlexDiv>
			</ColumnInfoBox>
			<Content>
				{
					openSourceProjects
						.filter(project => !project.hidden)
						.sort((a, b) => {
							const titleA = a.name.toUpperCase();
							const titleB = b.name.toUpperCase();
							if (titleA < titleB) {
								return -1;
							}
							if (titleA > titleB) {
								return 1;
							}
							return 0;
						})
						.map((project, index) => {
							return (
								<OpenSourceProjectEntry
									key={index}
									title={project.name}
									license={project.license}
									subtitle={project.description}
									href={project.url}
								/>
							);
						})
				}
				<ReadingSpace/>
			</Content>
		</Main>
	);
}
