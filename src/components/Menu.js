import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledMenu = styled.div`
    height: 60px;
    text-align: center;
`;

const MenuItem = styled(Link)`
    display: inline-block;
    height: 60px;
    padding: 0 10px;
    margin: 0 10px;
    line-height: 60px;
    font-size: 18px;
    color: #000;
    text-decoration: none;
    border-bottom: ${(props) => props.selected ? 'solid 1px #000' : '1px'};

    &:hover {
        border-bottom: solid 1px #000;
        cursor: pointer;
    }
`;

export default class Menu extends React.Component {
  render() {
    return (
      <StyledMenu>
        <MenuItem to="/" selected={this.props.me}>Me</MenuItem>
        <MenuItem to="/projects" selected={this.props.projects}>
          Projects
        </MenuItem>
        <MenuItem to="/open-source" selected={this.props.openSource}>
          Open-source
        </MenuItem>
      </StyledMenu>
    );
  }
}
