import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CircleImage } from '../../lib/CircleImage';
import { BowtieBanner } from '../../lib/BowtieBanner';
import { ReadingSpace } from '../../lib/ReadingSpace';

const StyledAbstractMenu = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	background: ${props => props.theme.nav.background};
`;

const StyledDesktopMenu = styled(StyledAbstractMenu)`
	min-width: 300px;
	max-width: 300px;
    height: 100vh;
`;

const StyledMobileMenu = styled(StyledAbstractMenu)`
	width: 100%;
  	height: inherit;
`;

const MenuHeaderIcon = styled(CircleImage)`
	display: flex;
	margin-top: 40px;
	border: solid 1px ${props => props.theme.nav.icon.border};
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
	color: ${props => props.selected ? props.theme.text.title : props.theme.text.negative};
	text-decoration: none;
	background: ${props => props.selected ? props.theme.nav.item.selected.background : props.theme.transparent};
	text-align: center;
	transition: background 200ms;
	white-space: normal;

	&:hover {
		background:${props => props.selected ? props.theme.nav.item.selected.background : props.theme.nav.item.hover.background};
	}
`;


export default function Menu() {
	const location = useLocation();
	const path = location.pathname;

	const viewMode = useSelector(store => store.viewMode);

	if (viewMode === 'desktop') {
		return (
			<StyledDesktopMenu>
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
					<NavItem end to="/work-history" selected={path === '/work-history'}>
						Work History
					</NavItem>
					<NavItem end to="/running" selected={path === '/running'}>
						Running
					</NavItem>
					<ReadingSpace height="20px" />
				</Nav>
			</StyledDesktopMenu>
		);
	} else if (viewMode === 'mobile') {
		return (
			<StyledMobileMenu>
				<MenuHeaderIcon src="/images/headshot.webp" />
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
					<NavItem end to="/work-history" selected={path === '/work-history'}>
						Work History
					</NavItem>
					<NavItem end to="/running" selected={path === '/running'}>
						Running
					</NavItem>
					<ReadingSpace height="20px" />
				</Nav>
			</StyledMobileMenu>
		);
	} else {
		return (
			<div />
		);
	}
}
