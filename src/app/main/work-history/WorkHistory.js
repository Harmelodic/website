import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Main } from '../Main';
import { fetchWorkHistory } from './middleware';
import { ColumnInfoBox } from '../../../lib/InfoBox';
import { Title } from '../../../lib/Title';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { FlexBox } from '../../../lib/FlexBox';

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
							<FlexBox>{placement.highest_role} @ {placement.company}</FlexBox>
							<FlexBox>{placement.from} - {placement.to}</FlexBox>
							<FlexBox>{placement.highest_salary}</FlexBox>
						</ColumnInfoBox>
					);
				})
			}
			<ReadingSpace/>
		</Main>
	);
}
