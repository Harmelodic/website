import styled from 'styled-components';
import { Main } from '../Main';
import { Title } from '../../../lib/Title';
import { ReadingSpace } from '../../../lib/ReadingSpace';

const WorkHistoryMain = styled(Main)`
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export default function Bookmarks() {
	return (
		<WorkHistoryMain>
			<Title>Bookmarks</Title>
			<ReadingSpace/>
		</WorkHistoryMain>
	);
}
