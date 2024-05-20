import { ColumnInfoBox, RowInfoBox } from '../lib/InfoBox';
import { ReadingSpace } from '../lib/ReadingSpace';
import { Title } from '../lib/Title';
import { Main } from '../lib/Main';
import styled from "styled-components";
import { ProjectSmall } from "../lib/ProjectSmall";

const WorkTitle = styled.span`
    font-weight: ${props => props.theme.font.weight.bold};
`;

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
				<WorkTitle>Software Engineer @ Nordnet</WorkTitle>
				<span>May 2021 - Current</span>
				<span>76,500 kr / month</span>
			</ColumnInfoBox>

			<ColumnInfoBox>
				<WorkTitle>Director @ Coding for Immigrants (CFI)</WorkTitle>
				<span>September 2022 - May 2024</span>
				<span>Volunteer</span>
			</ColumnInfoBox>

			<ColumnInfoBox>
				<WorkTitle>Engineering Manager @ Klarna</WorkTitle>
				<span>August 2020 - May 2021</span>
				<span>68,967 kr / month</span>
			</ColumnInfoBox>

			<ColumnInfoBox>
				<WorkTitle>Software Engineer Lead @ Capgemini</WorkTitle>
				<span>September 2014 - August 2020</span>
				<span>£49,425 / year</span>
			</ColumnInfoBox>

			<RowInfoBox style={{ borderTop: "solid 2px" }}>
				<ProjectSmall
					src="/images/accreditations/cloud-architect.webp"
					title="Cloud Architect"
					href="https://www.credential.net/bd886e12-4a18-4439-8c9a-680107c23547"
					size={100}
				/>
				<ProjectSmall
					src="/images/accreditations/cncf.svg"
					title="CNCF Contributor"
					href="https://www.cncf.io/"
					size={60}
				/>
				<ProjectSmall
					src="/images/accreditations/gitlab.svg"
					title="GitLab Hero"
					href="https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/34774"
					size={60}
				/>
				<ProjectSmall
					src="/images/accreditations/certificate.svg"
					title="BSc Digital &amp; Technology Solutions"
					href="https://www.aston.ac.uk"
					size={65}
				/>
			</RowInfoBox>

			<ReadingSpace/>
		</Main>
	);
}
