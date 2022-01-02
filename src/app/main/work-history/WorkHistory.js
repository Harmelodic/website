import styled from 'styled-components';
import { Main } from '../Main';
import { Title } from '../../../lib/Title';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { useEffect } from 'react';

const WorkHistoryMain = styled(Main)`
  	flex-flow: column nowrap;
  	justify-content: flex-start;
  	align-items: center;
`;

export default function WorkHistory(props) {
	useEffect(() => {
		props.updatePath();
	}, []);

	return (
		<WorkHistoryMain>
			<Title>Work History</Title>
			<ReadingSpace/>
		</WorkHistoryMain>
	);
}
