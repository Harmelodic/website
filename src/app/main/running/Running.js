import styled from 'styled-components';
import { FlexDiv } from '../../../lib/FlexDiv';
import { ColumnInfoBox } from '../../../lib/InfoBox';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';
import { Main } from '../Main';
import {Hyperlink} from "../../../lib/Hyperlink";

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
				<FlexDiv>I'm on Strava:</FlexDiv>
				<FlexDiv>
					<Hyperlink href="https://www.strava.com/athletes/Harmelodic" target="_blank" rel="noopener">
						@Harmelodic
					</Hyperlink>
				</FlexDiv>
			</ColumnInfoBox>
			<ReadingSpace/>
		</WorkHistoryMain>
	);
}
