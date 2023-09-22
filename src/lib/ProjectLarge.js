import styled from 'styled-components';

const StyledProject = styled.a`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	margin: 5px;
	width: 200px;
    background: ${props => props.theme.colors.transparent};
	text-decoration: none;
	color: ${props => props.theme.font.titleColor};
	transition: background 300ms;

	&:hover {
		background: ${props => props.theme.colors.mainHover};
		cursor: pointer;
	}

	&:active {
		background: ${props => props.theme.colors.mainActive};
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
	border: solid 1px ${props => props.theme.colors.hardBorder};
	background-color:
	  ${props => props.background ? props.background : props.theme.colors.mainBackground};
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
	font-size: 1.2rem;
	line-height: 24px;
	white-space: normal;
	text-align: center;
`;

const StyledSubtitle = styled.span`
	display: flex;
	flex-flow: column nowrap;
	font-size: 0.8rem;
	color: ${props => props.theme.font.subtitleColor};
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
								.map(subtitleString => {
									return (
										<div key={subtitleString}>{subtitleString}</div>
									);
								})
						}
					</StyledSubtitle>
				}
			</StyledProjectText>
		</StyledProject>
	);
}
