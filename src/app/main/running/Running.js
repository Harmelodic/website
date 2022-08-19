import styled from 'styled-components';
import { Main } from '../Main';
import { RowInfoBox } from '../../../lib/InfoBox';
import { Title } from '../../../lib/Title';
import { ReadingSpace } from '../../../lib/ReadingSpace';

const WorkHistoryMain = styled(Main)`
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export default function Running() {
	return (
		<WorkHistoryMain>
			<Title>Running</Title>
			<RowInfoBox>Coming Soon</RowInfoBox>
			<ReadingSpace/>
		</WorkHistoryMain>
	);
}
