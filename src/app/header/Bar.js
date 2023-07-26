import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useWindowSize } from '../../useWindowSize';

const Nav = styled.nav`
	display: flex;
	flex-flow: row nowrap;
	justify-content: ${props => props.thinView ? 'flex-start' : 'center'};
	align-items: center;
	width: 100%;
	max-width: 1000px;
	height: 100%;
	margin: 0 auto;
	overflow-x: auto;
`;

const NavItem = styled(NavLink)`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	height: 100%;
	padding: 0 20px;
	font-size: 1rem;
	color: ${props => props.theme.font.normalNegativeColor};
	text-decoration: none;
	background: ${props => props.selected ? props.theme.colors.accents.green : props.theme.colors.transparent};
	text-align: center;
	transition: background 200ms;
	white-space: normal;

	&:hover {
		background: ${props => props.selected ? props.theme.colors.accents.green : props.theme.colors.accents.greenFaded};
	}
`;


export default function Bar() {
	const location = useLocation();
	const path = location.pathname;

	const windowSize = useWindowSize();

	return (
		<Nav thinView={windowSize.width < 650}>
			<NavItem end to="/" selected={path === '/'}>
				Me
			</NavItem>
			<NavItem to="/blog" selected={path.match(/^\/blog/) !== null}>
				Blog
			</NavItem>
			<NavItem end to="/creations" selected={path === '/creations'}>
				Creations
			</NavItem>
			<NavItem end to="/open-source" selected={path === '/open-source'}>
				Open Source
			</NavItem>
			<NavItem end to="/work-history" selected={path === '/work-history'}>
				Work History
			</NavItem>
			<NavItem end to="/running" selected={path === '/running'}>
				Running
			</NavItem>
		</Nav>
	);
}
