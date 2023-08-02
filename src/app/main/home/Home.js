import { SocialMedia } from '../../../lib/SocialMedia';
import { ColumnInfoBox, RowInfoBox } from '../../../lib/InfoBox';
import { Main } from '../Main';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';
import { ProjectSmall } from '../../../lib/ProjectSmall';
import { CircleImage } from '../../../lib/CircleImage';
import styled, { useTheme } from 'styled-components';

const ImageOfMe = styled(CircleImage)`
	margin-top: 50px;
	border: solid 1px ${props => props.theme.colors.hardBorder};
`;

export default function Home() {
	const theme = useTheme();

	return (
		<Main>
			<ImageOfMe src="/images/headshot.webp" />

			<Title>Matt Smith</Title>

			<ColumnInfoBox>
				<span>he/him</span>
				<span>Harmelodic</span>
				<span>Software Engineer</span>
				<span>Musician</span>
				<span>Rock Climber</span>
				<span>Writer</span>
				<span>Dungeon Master</span>
			</ColumnInfoBox>

			<RowInfoBox>
				<SocialMedia
					href="https://github.com/Harmelodic"
					title="GitHub"
					src={`/images/github-${theme.name}.svg`}
				/>
				<SocialMedia
					href="https://www.linkedin.com/in/harmelodic/"
					title="LinkedIn"
					src="/images/linkedin.svg"
				/>
				<SocialMedia
					href="https://youtube.com/Harmelodic"
					title="YouTube"
					src="/images/youtube.svg"
				/>
				<SocialMedia
					href="mailto:matt@harmelodic.com"
					title="Email"
					src={`/images/mail-${theme.name}.svg`}
				/>
			</RowInfoBox>

			<RowInfoBox>
				<ProjectSmall
					src="/images/cloud-architect.webp"
					title="Cloud Architect"
					href="https://www.credential.net/bd886e12-4a18-4439-8c9a-680107c23547"
					size={100}
				/>
				<ProjectSmall
					src="/images/cfi.webp"
					title='Co-Leader & Director'
					href="https://github.com/Coding-For-Immigrants"
					size={100}
				/>
				<ProjectSmall
					src="/images/cncf.svg"
					title="CNCF Contributor"
					href="https://www.cncf.io/"
					size={60}
				/>
				<ProjectSmall
					src="/images/gitlab.svg"
					title="GitLab Hero"
					href="https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/34774"
					size={60}
				/>
				<ProjectSmall
					src="/images/certificate.svg"
					title="BSc Digital &amp; Technology Solutions"
					href="https://www.aston.ac.uk"
					size={65}
				/>
			</RowInfoBox>

			<ReadingSpace/>
		</Main>
	);
}
