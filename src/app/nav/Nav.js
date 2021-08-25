import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CircleImage } from './CircleImage';

const StyledNav = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	min-width: 300px;
	max-width: 300px;
	background: #191919;
`;

const Menu = styled.nav`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;

const MenuHeaderIcon = styled(CircleImage)`
	display: flex;
	margin: 55px 0;
	border: solid 1px #fff;
`;

const MenuItem = styled(Link)`
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

export default function Nav(props) {
	const { path } = props;

	return (
		<StyledNav>
			<MenuHeaderIcon src="/images/headshot.webp" />
			<Menu>
				<MenuItem to="/" selected={path === '/'}>
					Me
				</MenuItem>
				<MenuItem to="/blog" selected={path.match(/^\/blog/) !== null}>
					Blog
				</MenuItem>
				<MenuItem to="/projects" selected={path === '/projects'}>
					Projects
				</MenuItem>
				<MenuItem to="/open-source" selected={path === '/open-source'}>
					Open-source
				</MenuItem>
			</Menu>
		</StyledNav>
	);
}
