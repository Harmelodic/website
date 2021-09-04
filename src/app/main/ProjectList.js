import { Project } from './Project';
import styled from 'styled-components';
import { Main } from './Main';

const ProjectsMain = styled(Main)`
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	max-width: 100%;
`;

export function ProjectList(props) {
	return (
		<ProjectsMain>
			{
				props.projects
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
