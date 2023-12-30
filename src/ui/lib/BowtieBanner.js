import styled from 'styled-components';

const Banner = styled.div`
	width: 100%;
	height: ${props => props.bannerHeight}px;
	margin-top: 40px;
`;

const RainbowBar = styled.div`
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	
	height: ${props => props.rainbowHeight}px;
	background: black; /* For browsers that do not support gradients */
	background: linear-gradient(to right,
	${props => props.theme.colors.rainbow.one},
	${props => props.theme.colors.rainbow.two},
	${props => props.theme.colors.rainbow.three},
	${props => props.theme.colors.rainbow.four},
	${props => props.theme.colors.rainbow.five},
	${props => props.theme.colors.rainbow.six},
	${props => props.theme.colors.rainbow.seven},
	${props => props.theme.colors.rainbow.eight},
	${props => props.theme.colors.rainbow.nine}); /* Standard syntax (must be last) */
`;

const Logo = styled.img`
	position: relative;
	top: -${props => props.rainbowHeight}px;
	left: 50%;
	transform: translateX(-50%);
	height: ${props => props.bannerHeight}px;
	width: ${props => props.bannerHeight}px;
	user-select: none;
`;

export function BowtieBanner(props) {
	const { bannerHeight, rainbowHeight } = props;

	return (
		<Banner bannerHeight={bannerHeight}>
			<RainbowBar rainbowHeight={rainbowHeight}/>
			<Logo src="/images/logo.svg"
				  alt="Harmelodic Logo"
				  bannerHeight={bannerHeight}
				  rainbowHeight={rainbowHeight}/>
		</Banner>
	);
}
