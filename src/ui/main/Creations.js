import styled from 'styled-components';
import { Main } from '../lib/Main';
import { ReadingSpace } from '../lib/ReadingSpace';
import { Title } from '../lib/Title';
import { ProjectLarge } from '../lib/ProjectLarge';

const Content = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
`;

export default function Creations() {
	return (
		<Main>
			<Title>Creations</Title>
			<Content>
				<ProjectLarge
					title='Foofie The Dog'
					subtitle='"Weird Al" Yankovic Homage'
					href='https://www.foofiethedog.com'
					src='/images/creation/foofiethedog.webp'
					background={'#000000'}
				/>
				<ProjectLarge
					title='Minimal Grey Chrome'
					subtitle='Chrome Theme'
					href='https://chrome.google.com/webstore/detail/minimal-grey/eibdijcbgalojjjeheligknccencdpng'
					src='/images/creation/minimal-grey.svg'
					background={'#4e4e4e'}
					size='40'
				/>
				<ProjectLarge
					title='Minimal Grey Firefox'
					subtitle='Firefox Theme'
					href='https://addons.mozilla.org/en-GB/firefox/addon/minimal-grey-theme/'
					src='/images/creation/minimal-grey-firefox.png'
					background={'#e8e8e8'}
				/>
				<ProjectLarge
					title="Professor Zorg's Guide to Alien Etiquette"
					subtitle='Retro Game Tool'
					href='https://harmelodic.github.io/zorg'
					src='/images/creation/zorg.webp'
					background={'#ffffff'}
				/>
				<ProjectLarge
					title='Stackchat'
					subtitle='Podcast'
					href='https://stackchat.github.io'
					src='/images/creation/stackchat.svg'
					background={'#ff024a'}
				/>
				<ReadingSpace/>
			</Content>
		</Main>
	);
}
