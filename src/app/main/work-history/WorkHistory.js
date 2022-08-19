import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Main } from '../Main';
import { fetchWorkHistory } from './middleware';
import { ColumnInfoBox } from '../../../lib/InfoBox';
import { Title } from '../../../lib/Title';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { FlexDiv } from '../../../lib/FlexDiv';

export default function WorkHistory() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWorkHistory());
	}, []);

	const workHistory = useSelector(store => store.workHistory);

	return (
		<Main>
			<Title>Work History</Title>
			{
				workHistory.map((placement, index) => {
					return (
						<ColumnInfoBox key={index}>
							<FlexDiv>{placement.highest_role} @ {placement.company}</FlexDiv>
							<FlexDiv>{placement.from} - {placement.to}</FlexDiv>
							<FlexDiv>{placement.highest_salary}</FlexDiv>
						</ColumnInfoBox>
					);
				})
			}
			<ReadingSpace/>
		</Main>
	);
}
