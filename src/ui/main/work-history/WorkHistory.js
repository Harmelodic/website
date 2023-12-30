import { FlexDiv } from '../../lib/FlexDiv';
import { ColumnInfoBox } from '../../lib/InfoBox';
import { ReadingSpace } from '../../lib/ReadingSpace';
import { Title } from '../../lib/Title';
import { Main } from '../Main';

export default function WorkHistory() {
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

			<ColumnInfoBox>
				<FlexDiv style={{ fontWeight: 600 }}>
					Software Engineer @ Nordnet
				</FlexDiv>
				<FlexDiv>May 2021 - Current</FlexDiv>
				<FlexDiv style={{ fontSize: '0.8rem' }}>73,500 kr / month</FlexDiv>
				<FlexDiv>
					&
				</FlexDiv>
				<FlexDiv style={{ fontWeight: 600 }}>
					Director @ Coding for Immigrants (CFI)
				</FlexDiv>
				<FlexDiv>September 2022 - Current</FlexDiv>
				<FlexDiv style={{ fontSize: '0.8rem' }}>0 / month</FlexDiv>
			</ColumnInfoBox>

			<ColumnInfoBox>
				<FlexDiv style={{ fontWeight: 600 }}>
					Engineering Manager @ Klarna
				</FlexDiv>
				<FlexDiv>August 2020 - May 2021</FlexDiv>
				<FlexDiv style={{ fontSize: '0.8rem' }}>68,967 kr / month</FlexDiv>
			</ColumnInfoBox>

			<ColumnInfoBox>
				<FlexDiv style={{ fontWeight: 600 }}>
					Software Engineer Lead @ Capgemini
				</FlexDiv>
				<FlexDiv>September 2014 - August 2020</FlexDiv>
				<FlexDiv style={{ fontSize: '0.8rem' }}>£49,425 / year</FlexDiv>
			</ColumnInfoBox>

			<ReadingSpace/>
		</Main>
	);
}
