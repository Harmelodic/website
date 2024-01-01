import { useState } from 'react';
import MediaListEntry from './MediaListEntry';
import SortPicker from './SortPicker';
import { Main } from '../../lib/Main';
import styled from 'styled-components';
import { useFilmsSeen } from '../../../hooks/useFilmsSeen';
import { Title } from '../../lib/Title';
import { ColumnInfoBox } from '../../lib/InfoBox';

const FilmsSeenMain = styled(Main)`
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
`;

export default function FilmsSeen() {
	const filmsSeen = useFilmsSeen();

	const [sort, setSort] = useState('favourite');

	function onChangeSort(sort) {
		setSort(sort);
	}

	const filmsSeenWithPosition = filmsSeen.map((film, index) => {
		return {
			...film,
			position: index + 1,
		};
	});

	return (
		<FilmsSeenMain>
			<Title>Films I've Seen</Title>
			<SortPicker
				selectedChoice={sort}
				onChangeSort={onChangeSort}
			/>
			{
				filmsSeen.length === 0 && (
					<ColumnInfoBox>
						<span>Loading films</span>
					</ColumnInfoBox>
				)
			}
			{
				filmsSeenWithPosition
					.sort((filmA, filmB) => {
						switch (sort) {
							case 'alphabetical':
								return filmA.primary_title
									.localeCompare(filmB.primary_title);
							case 'chronological':
								return filmA.start_year - filmB.start_year;
							default:
								// Favourite
								return filmA.position - filmB.position;
						}
					})
					.map(film => {
						return (
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
						);
					})
			}
		</FilmsSeenMain>
	);
}
