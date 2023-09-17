import { ColumnInfoBox } from '../../../lib/InfoBox';
import { Main } from '../Main';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';
import styled from 'styled-components';
import { Section } from './Section';
import { Shelf } from './Shelf';
import { LibraryLink } from './LibraryLink';

import libraryData from './library.json';

const LibraryContext = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	width: 80%;
`;

export default function Library() {
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

			{/* Section > Subsections > Links */}
			<LibraryContext>
				{
					libraryData.map(section => (
						<Section title={section.title}>
							{section.shelves.map(shelf => (
								<Shelf title={shelf.title}>
									{shelf.links.map(link => (
										<LibraryLink title={link.title}
													 href={link.href}
													 imgSrc={link.imgSrc} />
									))}
								</Shelf>
							))}
						</Section>
					))
				}
			</LibraryContext>

			<ReadingSpace/>
		</Main>
	);
}
