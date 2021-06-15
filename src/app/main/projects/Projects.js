import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from './middleware';
import { Main } from '../Main';
import { Project } from '../Project';

const ProjectsMain = styled(Main)`
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	padding-top: 20px;
	max-width: 100%;
`;

export default function Projects(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		props.updatePath();
		dispatch(fetchProjects());
	}, []);

	const projects = useSelector(store => store.projects);

	return (
		<ProjectsMain>
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
							<Project
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
		</ProjectsMain>
	);
}
