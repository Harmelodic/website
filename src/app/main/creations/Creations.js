import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCreations, creationsSelector } from './creationsState';
import styled from 'styled-components';
import { Main } from '../Main';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';
import { ProjectLarge } from '../../../lib/ProjectLarge';

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
`;

export default function Creations() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCreations());
	}, []);

	const creations = useSelector(creationsSelector);

	return (
		<Main>
			<Title>Creations</Title>
			<Content>
				{
					creations
						.filter(creation => !creation.hidden)
						.sort((a, b) => {
							const titleA = a.title.toUpperCase();
							const titleB = b.title.toUpperCase();
							if (titleA < titleB) {
								return -1;
							}
							if (titleA > titleB) {
								return 1;
							}
							return 0;
						})
						.map((creation) => {
							return (
								<ProjectLarge
									key={creation.src}
									src={creation.src}
									background={creation.background}
									title={creation.title}
									subtitle={creation.subtitle}
									href={creation.href}
									size={creation.size}
								/>
							);
						})
				}
				<ReadingSpace/>
			</Content>
		</Main>
	);
}
