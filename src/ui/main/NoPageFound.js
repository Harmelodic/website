import { ColumnInfoBox } from '../lib/InfoBox';
import { Main } from '../lib/Main';
import { ReadingSpace } from '../lib/ReadingSpace';
import { Title } from '../lib/Title';
import { Link } from 'react-router-dom';

export default function NoPageFound() {
	return (
		<Main>
			<Title>No Page Found</Title>

			<ColumnInfoBox>
				<Link to="/">Click here to go home.</Link>
			</ColumnInfoBox>

			<ReadingSpace/>
		</Main>
	);
}
