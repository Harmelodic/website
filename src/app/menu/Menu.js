import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CircleImage } from '../../lib/CircleImage';
import { BowtieBanner } from '../../lib/BowtieBanner';

const StyledMenu = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	min-width: 300px;
	max-width: 300px;
	height: 100vh;
	background: ${props => props.theme.nav.background};
`;

const MenuHeaderIcon = styled(CircleImage)`
	display: flex;
	margin-top: 55px;
	border: solid 1px #fff;
`;


const Nav = styled.nav`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
  	margin-top: 40px;
`;

const NavItem = styled(NavLink)`
	width: 100%;
	padding: 20px 0;
	font-size: 18px;
	color: ${props => props.selected ? props.theme. nav.textColorSelected : props.theme.nav.textColor};
	text-decoration: none;
	background: ${props => props.selected ? props.theme.nav.itemBackground : props.theme.transparent};
	text-align: center;
	transition: background 200ms;
	white-space: normal;

	&:hover {
		background: ${props => props.selected ? props.theme.nav.itemBackground : props.theme.nav.itemHover};
	}
`;


export default function Menu() {

	const location = useLocation();
	const path = location.pathname;

	return (
		<StyledMenu>
			<MenuHeaderIcon src="/images/headshot.webp" />
			<BowtieBanner bannerHeight={80} rainbowHeight={3} />
			<Nav>
				<NavItem end to="/" selected={path === '/'}>
					Me
				</NavItem>
				<NavItem to="/blog" selected={path.match(/^\/blog/) !== null}>
					Blog
				</NavItem>
				<NavItem end to="/projects" selected={path === '/projects'}>
					Projects
				</NavItem>
				<NavItem end to="/open-source" selected={path === '/open-source'}>
					Open-source
				</NavItem>
			</Nav>
		</StyledMenu>
	);
}
