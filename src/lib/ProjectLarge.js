import styled from 'styled-components';

const StyledProject = styled.a`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	margin: 5px;
	width: 200px;
	text-decoration: none;
	color: ${props => props.theme.project.color};
	transition: background 300ms;

	&:hover {
		background: ${props => props.theme.project.hover.background};
		cursor: pointer;
	}
`;

const StyledProjectImageCircle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 25px;
	width: 150px;
	height: 150px;
	border-radius: 100%;
	overflow: hidden;
	border: solid 1px ${props => props.theme.project.circle.border};
	background-color:
	  ${props => props.background ? props.background : props.theme.project.circle.defaultBackground};
`;

const StyledProjectImage = styled.img`
	width: ${props => props.size ? props.size : '65'}%;
	height: ${props => props.size ? props.size : '65'}%;
`;

const StyledProjectText = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	width: 190px;
	padding-left: 5px;
	padding-right: 5px;
	padding-bottom: 25px;
	font-size: 20px;
	line-height: 24px;
	white-space: normal;
	text-align: center;
`;

const StyledSubtitle = styled.span`
	display: flex;
	flex-flow: column nowrap;
	font-size: 14px;
	color: ${props => props.theme.project.subtitleColor};
	font-style: italic;
`;

export function ProjectLarge(props) {
	return (
		<StyledProject href={props.href} target="_blank" rel="noopener">
			<StyledProjectImageCircle background={props.background}>
				<StyledProjectImage
					src={props.src ? props.src : '/images/NoLogo.svg'}
					alt="project-image"
					size={props.size}
				/>
			</StyledProjectImageCircle>
			<StyledProjectText>
				{props.title}
				{
					props.subtitle &&
					<StyledSubtitle>
						{
							props.subtitle
								.split('\n')
								.map((subtitleString, index) => {
									return (
										<div key={index}>{subtitleString}</div>
									);
								})
						}
					</StyledSubtitle>
				}
			</StyledProjectText>
		</StyledProject>
	);
}
