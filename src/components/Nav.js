import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CircleImage from '../components/CircleImage';

const StyledNav = styled.nav`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    min-height: 100vh;
    align-items: center;
    min-width: 300px;
    border-right: solid 1px #aaa;
`;

const StyledMenu = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const MenuHeaderIcon = styled(CircleImage)`
    display: flex;
    margin: 40px 0;
`;

const MenuItem = styled(Link)`
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    color: ${props => props.selected ? '#fff' : '#000'};
    text-decoration: none;
    background: ${props => props.selected ? '#333' : 'rgba(0,0,0,0)'};
    text-align: center;
    transition: background: 200ms;

    &:hover {
        cursor: pointer;
        background: ${props => props.selected ? '#333' : '#f3f3f3'};
    }
`;

export default function Nav(props) {
  const { path } = props;

  return (
    <StyledNav>
      <MenuHeaderIcon src="/images/headshot.webp" />
      <StyledMenu>
        <MenuItem to="/" selected={path === '/'}>
          Me
        </MenuItem>
        <MenuItem to="/blog" selected={path === '/blog'}>
          Blog
        </MenuItem>
        <MenuItem to="/projects" selected={path === '/projects'}>
          Projects
        </MenuItem>
        <MenuItem to="/open-source" selected={path === '/open-source'}>
          Open-source
        </MenuItem>
      </StyledMenu>
    </StyledNav>
  );
}
