import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlexDiv } from '../../../lib/FlexDiv';
import { ColumnInfoBox } from '../../../lib/InfoBox';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';
import { Main } from '../Main';
import { fetchWorkHistory, workHistorySelector } from './workHistoryState';

export default function WorkHistory() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWorkHistory());
	}, []);

	const workHistory = useSelector(workHistorySelector);

	return (
		<Main>
			<Title>Work History</Title>
			<ColumnInfoBox style={{ fontSize: '1rem' }}>
				I believe in Pay Transparency, which is why below I have listed the highest salary I achieved for
				each role.
				<br/>
				If you believe you are being underpaid for your work, then please raise this with your employer or
				union.
			</ColumnInfoBox>
			{
				workHistory.map((placement, index) => {
					return (
						<ColumnInfoBox key={index}>
							<FlexDiv style={{ fontWeight: 600 }}>
								{placement.highest_role} @ {placement.company}
							</FlexDiv>
							<FlexDiv>{placement.from} - {placement.to}</FlexDiv>
							<FlexDiv style={{ fontSize: '0.8rem' }}>{placement.highest_salary}</FlexDiv>
						</ColumnInfoBox>
					);
				})
			}
			<ReadingSpace/>
		</Main>
	);
}
