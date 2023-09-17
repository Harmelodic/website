import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	height: 100%;
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
	white-space: normal;
	transition: background 200ms;

	&:hover {
		background:
			${props => props.selected ? props.theme.colors.accents.green : props.theme.colors.accents.greenFaded};
	}
`;


export function NavMenu() {
	const location = useLocation();
	const path = location.pathname;

	return (
		<Nav>
			<NavItem end to="/" selected={path === '/'}>
                Me
			</NavItem>
			<NavItem to="/blog" selected={path.startsWith('/blog')}>
                Blog
			</NavItem>
			<NavItem end to="/creations" selected={path === '/creations'}>
                Creations
			</NavItem>
			<NavItem end to="/open-source" selected={path === '/open-source'}>
                Open Source
			</NavItem>
			<NavItem end to="/library" selected={path === '/library'}>
				Library
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
