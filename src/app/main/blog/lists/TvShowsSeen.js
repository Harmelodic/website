import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTvShowsSeen } from './middleware';
import MediaListEntry from './MediaListEntry.js';
import SortPicker from './SortPicker.js';
import styled from 'styled-components';
import { Main } from '../../Main';

const TvShowsSeenMain = styled(Main)`
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
`;

export default function TvShowsSeen() {
	const tvShowsSeen = useSelector(store => store.blog.lists.tvShowsSeen);

	const [sort, setSort] = useState('favourite');

	function onChangeSort(sort) {
		setSort(sort);
	}

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTvShowsSeen());
	}, []);

	const tvShowsSeenWithPosition = tvShowsSeen
		.map((tvShow, index) => {
			tvShow.position = index + 1;
			return tvShow;
		});

	return (
		<TvShowsSeenMain>
			<h1 style={{ textAlign: 'center' }}>TV Shows I've Seen</h1>
			<SortPicker
				selectedChoice={sort}
				onChangeSort={onChangeSort}
			/>
			{
				tvShowsSeen.length === 0 && <div style={{ padding: '20px' }}>Loading...</div>
			}
			{
				tvShowsSeenWithPosition
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
					})
					.map((tvShow) => {
						return (
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
						);
					})
			}
		</TvShowsSeenMain>
	);
}
