import styled from 'styled-components';

const size = 60;

const StyledSocialMedia = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	width: ${size}px;
	height: ${size}px;
	text-decoration: none;
	transition: 200ms background;

	&:hover {
		background: ${props => props.theme.colors.mainHover};
	}
  
	&:active {
		background: ${props => props.theme.colors.mainActive};
	}
`;

const StyledImage = styled.img`
	width: 55%;
	height: 55%;
	border-radius: 3px;
`;

export function SocialMedia(props) {
	return (
		<StyledSocialMedia
			title={props.title}
			href={props.href}
			target={props.href.includes('http') ? '_blank' : '_self'}
			rel="noopener">
			<StyledImage src={props.src} alt={props.title} />
		</StyledSocialMedia>
	);
}
