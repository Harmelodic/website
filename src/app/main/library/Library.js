import { ColumnInfoBox } from '../../../lib/InfoBox';
import { Main } from '../Main';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';
import styled from 'styled-components';
import { Shelf } from './Shelf';
import { LibraryLink } from './LibraryLink';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLibrary, librarySelector } from './libraryState';
import { useEffect } from 'react';

const LibraryContext = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	width: 80%;
	min-width: 320px;
	max-width: 1400px;
`;

export default function Library() {
	const dispatch = useDispatch();
	const library = useSelector(librarySelector);

	useEffect(() => {
		dispatch(fetchLibrary());
	}, []);

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

			<LibraryContext>
				{categories.map(category => (
					<Shelf title={category} key={category}>
						{library
							.filter(libraryLink => libraryLink.category === category)
							.sort((a, b) => a.title.toUpperCase().localeCompare(b.title.toUpperCase()))
							.map(libraryLink => (
								<LibraryLink key={libraryLink.title}
											 title={libraryLink.title}
											 href={libraryLink.href}
											 imgSrc={libraryLink.favicon} />
							))
						}
					</Shelf>
				))}
			</LibraryContext>

			<ReadingSpace/>
		</Main>
	);
}
