import styled from 'styled-components';

const StyledEntry = styled.a`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 0;
	width: 25%;
	padding: 15px;
    background: ${props => props.theme.button.item.background};
	text-decoration: none;
	color: ${props => props.theme.text.title};
	transition: background 300ms;

	&:hover {
		background: ${props => props.theme.button.item.hover.background};
		cursor: pointer;
	}

	&:active {
		background: ${props => props.theme.button.item.active.background};
	}
`;

const StyledProjectText = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	width: 100%;
	padding-left: 5px;
	padding-right: 5px;
	font-size: 1rem;
	line-height: 1.5rem;
	white-space: normal;
	text-align: left;
`;

const StyledTitle = styled.span`
	font-size: 1.1rem;
`;

const StyledSubtitle = styled.span`
	font-size: 0.8rem;
	color: ${props => props.theme.text.subtitle};
`;

export function OpenSourceProjectEntry(props) {
	return (
		<StyledEntry href={props.href} target="_blank" rel="noopener">
			<StyledProjectText>
				<StyledTitle>{props.title}</StyledTitle>
				<StyledSubtitle>{props.subtitle}</StyledSubtitle>
			</StyledProjectText>
		</StyledEntry>
	);
}
