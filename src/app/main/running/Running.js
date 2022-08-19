import styled from 'styled-components';
import { FlexBox } from '../../../lib/FlexBox';
import { ColumnInfoBox } from '../../../lib/InfoBox';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';
import { Main } from '../Main';

const WorkHistoryMain = styled(Main)`
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export default function Running() {
	return (
		<WorkHistoryMain>
			<Title>Running</Title>
			<ColumnInfoBox>
				<FlexBox>I'm on Strava:</FlexBox>
				<FlexBox>
					<a href="https://www.strava.com/athletes/Harmelodic" target="_blank" rel="noopener">
						@Harmelodic
					</a>
				</FlexBox>
			</ColumnInfoBox>
			<ReadingSpace/>
		</WorkHistoryMain>
	);
}
