import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects, projectsSelector } from './projectsState';
import styled from 'styled-components';
import { Main } from '../Main';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';
import { ProjectLarge } from '../../../lib/ProjectLarge';

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
`;

export default function Projects() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProjects());
	}, []);

	const projects = useSelector(projectsSelector);

	return (
		<Main>
			<Title>Projects</Title>
			<Content>
				{
					projects
						.filter(project => !project.hidden)
						.sort((a, b) => {
							const titleA = a.title.toUpperCase();
							const titleB = b.title.toUpperCase();
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
								<ProjectLarge
									key={index}
									src={project.src}
									background={project.background}
									title={project.title}
									subtitle={project.subtitle}
									href={project.href}
									size={project.size}
								/>
							);
						})
				}
				<ReadingSpace/>
			</Content>
		</Main>
	);
}
