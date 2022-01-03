import { ProjectLarge } from './ProjectLarge';

export function ProjectList(props) {
	return props.projects
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
		});
}
