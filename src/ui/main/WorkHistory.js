import { FlexDiv } from '../lib/FlexDiv';
import { ColumnInfoBox } from '../lib/InfoBox';
import { ReadingSpace } from '../lib/ReadingSpace';
import { Title } from '../lib/Title';
import { Main } from '../lib/Main';

export default function WorkHistory() {
	return (
		<Main>
			<Title>Work History</Title>
			<ColumnInfoBox>
				I believe in Pay Transparency, which is why below I have listed the highest salary I achieved for
				each role.
				<br/>
				If you believe you are being underpaid for your work, then please raise this with your employer or
				union.
			</ColumnInfoBox>

			<ColumnInfoBox>
				<b>Software Engineer @ Nordnet</b>
				<span>May 2021 - Current</span>
				<span>76,500 kr / month</span>
			</ColumnInfoBox>

			<ColumnInfoBox>
				<b>Director @ Coding for Immigrants (CFI)</b>
				<span>September 2022 - May 2024</span>
				<span>Volunteer</span>
			</ColumnInfoBox>

			<ColumnInfoBox>
				<b>Engineering Manager @ Klarna</b>
				<span>August 2020 - May 2021</span>
				<span>68,967 kr / month</span>
			</ColumnInfoBox>

			<ColumnInfoBox>
				<b>Software Engineer Lead @ Capgemini</b>
				<span>September 2014 - August 2020</span>
				<span>£49,425 / year</span>
			</ColumnInfoBox>

			<ReadingSpace/>
		</Main>
	);
}
