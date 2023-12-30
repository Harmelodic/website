import styled from 'styled-components';
import { useOpenSourceProjects } from './openSourceProjects';
import { Main } from '../Main';
import { ReadingSpace } from '../../lib/ReadingSpace';
import { Title } from '../../lib/Title';
import { OpenSourceProjectEntry } from '../../lib/OpenSourceProjectEntry';
import { ColumnInfoBox } from '../../lib/InfoBox';
import { FlexDiv } from '../../lib/FlexDiv';
import { Hyperlink } from '../../lib/Hyperlink';

const Content = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	max-width: 1500px;
`;

export default function OpenSource() {
	const openSourceProjects = useOpenSourceProjects();

	return (
		<Main>
			<Title>Open Source</Title>
			<ColumnInfoBox>
				<FlexDiv>
					<span>Sourced from </span>
					<Hyperlink href="https://github.com/Harmelodic?tab=repositories"
							   target="_blank"
							   rel="noopener">my GitHub</Hyperlink>:
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
						.map(project => {
							return (
								<OpenSourceProjectEntry
									key={project.name}
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
