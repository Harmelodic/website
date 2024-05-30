import { useState } from 'react';
import MediaListEntry from './MediaListEntry.js';
import SortPicker from './SortPicker.js';
import styled from 'styled-components';
import { Main } from '../../lib/Main';
import { useTvShowsSeen } from '../../../hooks/useTvShowsSeen';
import { Title } from '../../lib/Title';
import { ColumnInfoBox } from '../../lib/InfoBox';
import { ReadingSpace } from '../../lib/ReadingSpace';
import { ErrorMessage } from "../../lib/ErrorMessage";

const TvShowsSeenMain = styled(Main)`
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
`;

export default function TvShowsSeen() {
	const { tvShowsSeen, isLoadingTVShowsSeen, errorLoadingTVShowsSeen } = useTvShowsSeen();

	const [sort, setSort] = useState('favourite');

	function onChangeSort(sort) {
		setSort(sort);
	}

	const tvShowsToRender = tvShowsSeen
		.map((tvShow, index) => { // Add position for favourite sorting
			return {
				...tvShow,
				position: index + 1,
			};
		})
		.sort((tvShowA, tvShowB) => {
			switch (sort) {
				case 'alphabetical':
					return tvShowA.primary_title
						.localeCompare(tvShowB.primary_title);
				case 'chronological':
					return tvShowA.start_year - tvShowB.start_year;
				default:
					// Favourite
					return tvShowA.position - tvShowB.position;
			}
		});

	return (
		<TvShowsSeenMain>
			<Title>TV Shows I've Seen</Title>
			<SortPicker
				selectedChoice={sort}
				onChangeSort={onChangeSort}
			/>
			{
				errorLoadingTVShowsSeen.occurred ? (
					<ColumnInfoBox>
						<ErrorMessage>Error loading TV Shows Seen. Please, try again later.</ErrorMessage>
					</ColumnInfoBox>
				) : isLoadingTVShowsSeen ? (
					<ColumnInfoBox>
						<span>Loading TV shows</span>
					</ColumnInfoBox>
				) : tvShowsToRender.length === 0 ? (
					<ColumnInfoBox>
						<span>No TV Shows found</span>
					</ColumnInfoBox>
				) : tvShowsToRender.map(tvShow => (
					<MediaListEntry
						key={tvShow.tconst}
						details={tvShow}
						descriptionTexts={[
							`Original Release: ${
								tvShow.start_year
							}-${
								tvShow.end_year ? tvShow.end_year : 'Present'
							}`,

							`Creator${
								tvShow.creators.length > 1 ? 's' : ''
							}:${
								tvShow.creators
									.map(creator => '\n\t' + creator)
									.join(',')
							}`,

							`Genres:${
								tvShow.genres
									.split(',')
									.map(genre => ' ' + genre)
									.join(',')
							}`,
						]}
					/>
				))
			}
			<ReadingSpace/>
		</TvShowsSeenMain>
	);
}
