import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CircleImage } from '../../lib/CircleImage';

const StyledMenu = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	min-width: 300px;
	max-width: 300px;
	height: 100vh;
	background: #191919;
`;

const MenuHeaderIcon = styled(CircleImage)`
	display: flex;
	margin: 55px 0;
	border: solid 1px #fff;
`;

const Nav = styled.nav`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;

const NavItem = styled(Link)`
	width: 100%;
	padding: 20px 0;
	font-size: 18px;
	color: ${props => props.selected ? '#000' : '#fff'};
	text-decoration: none;
	background: ${props => props.selected ? '#fff' : 'rgba(0,0,0,0)'};
	text-align: center;
	transition: background 200ms;
	white-space: normal;

	&:hover {
		background: ${props => props.selected ? '#fff' : '#333'};
	}
`;

export default function Menu(props) {
	const { path } = props;

	return (
		<StyledMenu>
			<MenuHeaderIcon src="/images/headshot.webp" />
			<Nav>
				<NavItem to="/" selected={path === '/'}>
					Me
				</NavItem>
				<NavItem to="/blog" selected={path.match(/^\/blog/) !== null}>
					Blog
				</NavItem>
				<NavItem to="/projects" selected={path === '/projects'}>
					Projects
				</NavItem>
				<NavItem to="/open-source" selected={path === '/open-source'}>
					Open-source
				</NavItem>
			</Nav>
		</StyledMenu>
	);
}
