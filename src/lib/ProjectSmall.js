import styled from 'styled-components';

const StyledProject = styled.a`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	margin: 5px;
	width: 150px;
	text-decoration: none;
	color: ${props => props.theme.text.title};
	transition: background 300ms;

	&:hover {
		background: ${props => props.theme.hover.background};
		cursor: pointer;
	}
`;

const StyledProjectImageCircle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 25px;
	width: 100px;
	height: 100px;
	border-radius: 100%;
	overflow: hidden;
	border: solid 1px ${props => props.theme.circleImage.border};
	background-color:
	  ${props => props.background ? props.background : props.theme.circleImage.background};
`;

const StyledProjectImage = styled.img`
	width: ${props => props.size ? props.size : '65'}%;
	height: ${props => props.size ? props.size : '65'}%;
`;

const StyledProjectText = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	width: calc(100% - 10px);
	padding-left: 5px;
	padding-right: 5px;
	padding-bottom: 25px;
	font-size: 16px;
	line-height: 20px;
	white-space: normal;
	text-align: center;
`;

export function ProjectSmall(props) {
	return (
		<StyledProject href={props.href} target="_blank" rel="noopener">
			<StyledProjectImageCircle background={props.background}>
				<StyledProjectImage
					src={props.src ? props.src : '/images/NoLogo.svg'}
					alt="project-image"
					size={props.size}
				/>
			</StyledProjectImageCircle>
			<StyledProjectText>{props.title}</StyledProjectText>
		</StyledProject>
	);
}
