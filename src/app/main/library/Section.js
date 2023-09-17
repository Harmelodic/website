import styled from 'styled-components';

const SectionArea = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
	
	width: calc(100% - 40px);
	padding: 0 20px 20px 20px;
`;

const SectionTitle = styled.h2`
	font-weight: ${props => props.theme.font.weight};
	color: ${props => props.theme.font.titleColor};
`;

const Subsections = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: flex-start;
	width: 100%;
`;

export function Section(props) {
	return (
		<SectionArea>
			<div>***</div>
			<SectionTitle>{props.title}</SectionTitle>
			<Subsections>
				{props.children}
			</Subsections>
		</SectionArea>
	);
}
