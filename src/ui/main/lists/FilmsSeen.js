import { useState } from 'react';
import MediaListEntry from './MediaListEntry';
import SortPicker from './SortPicker';
import { Main } from '../../lib/Main';
import styled from 'styled-components';
import { useFilmsSeen } from '../../../hooks/useFilmsSeen';
import { Title } from '../../lib/Title';
import { ColumnInfoBox } from '../../lib/InfoBox';
import { ReadingSpace } from '../../lib/ReadingSpace';
import { ErrorMessage } from "../../lib/ErrorMessage";

const FilmsSeenMain = styled(Main)`
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
`;

export default function FilmsSeen() {
	const { filmsSeen, isLoadingFilmsSeen, errorLoadingFilmsSeen } = useFilmsSeen();

	const [sort, setSort] = useState('favourite');

	function onChangeSort(sort) {
		setSort(sort);
	}

	const filmsToRender = filmsSeen
		.map((film, index) => { // Add position for favourite sorting
			return {
				...film,
				position: index + 1,
			};
		})
		.sort((filmA, filmB) => {
			switch (sort) {
				case 'alphabetical':
					return filmA.primary_title.localeCompare(filmB.primary_title);
				case 'chronological':
					return filmA.start_year - filmB.start_year;
				default:
					// Favourite
					return filmA.position - filmB.position;
			}
		});

	return (
		<FilmsSeenMain>
			<Title>Films I've Seen</Title>
			<SortPicker
				selectedChoice={sort}
				onChangeSort={onChangeSort}
			/>
			{
				errorLoadingFilmsSeen.occurred ? (
					<ColumnInfoBox>
						<ErrorMessage>Error loading Films Seen. Please, try again later.</ErrorMessage>
					</ColumnInfoBox>
				) : isLoadingFilmsSeen ? (
					<ColumnInfoBox>
						<span>Loading films seen</span>
					</ColumnInfoBox>
				) : filmsToRender.length === 0 ? (
					<ColumnInfoBox>
						<span>No films found</span>
					</ColumnInfoBox>
				) : filmsToRender.map(film => (
					<MediaListEntry
						key={film.tconst}
						details={film}
						descriptionTexts={[
							'Year: ' + film.start_year,

							`Director${
								film.directors.length > 1 ? 's' : ''
							}:${
								film.directors.map(director => '\n\t' + director).join(',')
							}`,

							`Writer${
								film.writers.length > 1 ? 's' : ''
							}:${
								film.writers.map(writer => '\n\t' + writer).join(',')
							}`,

							`Genres:${
								film.genres.split(',').map(genre => ' ' + genre).join(',')
							}`,

							'Running Time: ' + film.runtime_minutes + ' minutes',
						]}
					/>
				))
			}
			<ReadingSpace/>
		</FilmsSeenMain>
	);
}
