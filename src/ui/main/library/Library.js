import { ColumnInfoBox } from '../../lib/InfoBox';
import { Main } from '../../lib/Main';
import { ReadingSpace } from '../../lib/ReadingSpace';
import { Title } from '../../lib/Title';
import styled from 'styled-components';
import { SectionBox } from './SectionBox';
import { LibraryLink } from './LibraryLink';
import { useLibrary } from '../../../hooks/useLibrary';

const LibraryContent = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	width: 80%;
	min-width: 320px;
	max-width: 1400px;
`;

export default function Library() {
	const { library, isLoadingLibrary, errorLoadingLibrary } = useLibrary();

	const categories = [...new Set(library.map(libraryLinks => libraryLinks.category))];
	categories.sort();

	return (
		<Main>
			<Title>Library</Title>

			<ColumnInfoBox>
				<span>
                    Previously stored in my browser's bookmarks, here's a collection of useful things on the internet:
				</span>
				<span>
					(The Library is still in development)
				</span>
			</ColumnInfoBox>

			<LibraryContent>
				{
					errorLoadingLibrary.occurred ? (
						<ColumnInfoBox>
							<span>Error loading library. Please, try again later.</span>
						</ColumnInfoBox>
					) : isLoadingLibrary ? (
						<ColumnInfoBox>
							<span>Loading Library...</span>
						</ColumnInfoBox>
					) : categories.map(category => (
						<SectionBox title={category} key={category}>
							{library
								.filter(libraryLink => libraryLink.category === category)
								.sort((a, b) => a.title.toUpperCase().localeCompare(b.title.toUpperCase()))
								.map(libraryLink => (
									<LibraryLink key={libraryLink.title}
										title={libraryLink.title}
										href={libraryLink.href}
										imgSrc={libraryLink.favicon}/>
								))
							}
						</SectionBox>
					))
				}
			</LibraryContent>

			<ReadingSpace/>
		</Main>
	);
}
