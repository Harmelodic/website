import styled, { useTheme } from 'styled-components';
import { SocialMedia } from '../lib/SocialMedia';
import { ColumnInfoBox, RowInfoBox } from '../lib/InfoBox';
import { Main } from '../lib/Main';
import { ReadingSpace } from '../lib/ReadingSpace';
import { Title } from '../lib/Title';
import { Separator } from '../lib/Separator';

const ImageOfMe = styled.img`
	margin-top: 50px;
	display: flex;
	width: 180px;
	height: 180px;
	border-radius: 100%;
	border: solid 1px ${props => props.theme.colors.hardBorder};
	background-color: ${props => props.theme.colors.mainBackground};
	background-image: url('${props => props.src}');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	font-size: 1.2rem;
`;

export default function Home() {
	const theme = useTheme();

	return (
		<Main>
			<ImageOfMe src="/images/matt.webp" alt="Portrait of Matt Smith" />

			<Title>Matt Smith</Title>
			<Separator width="180px" />
			<ColumnInfoBox>
				<span>he/him</span>
				<span>Harmelodic</span>
				<span>Software Engineer</span>
				<span>Musician</span>
				<span>Rock Climber</span>
				<span>Writer</span>
				<span>Dungeon Master</span>
			</ColumnInfoBox>
			<Separator width="450px" />
			<RowInfoBox>
				<SocialMedia
					href="https://bsky.app/profile/harmelodic.com"
					title="Bluesky"
					src={`/images/social/bluesky.svg`}
				/>
				<SocialMedia
					href="https://github.com/Harmelodic"
					title="GitHub"
					src={`/images/social/github-${theme.name}.svg`}
				/>
				<SocialMedia
					href="https://www.linkedin.com/in/harmelodic/"
					title="LinkedIn"
					src="/images/social/linkedin.svg"
				/>
				<SocialMedia
					href="https://www.youtube.com/@HarmelodicYT"
					title="YouTube"
					src="/images/social/youtube.svg"
				/>
				<SocialMedia
					href="mailto:matt@harmelodic.com"
					title="Email"
					src={`/images/social/mail-${theme.name}.svg`}
				/>
				<SocialMedia
					href="https://www.strava.com/athletes/97680039"
					title="Strava"
					src="/images/social/strava.svg"
				/>
			</RowInfoBox>

			<ReadingSpace/>
		</Main>
	);
}
