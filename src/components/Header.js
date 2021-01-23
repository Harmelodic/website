import React from 'react';
import styled from 'styled-components';

const size = 226;

const StyledHeader = styled.header`
    height: ${size}px;
    background: #000;
`;

const StyledLogo = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
    height: ${size}px;
    width: ${size}px;
    user-select: none;
`;

const RainbowBar = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    height: 7px;
    background: black; /* For browsers that do not support gradients */
    background: linear-gradient(to right,
      red,
      orange,
      yellow,
      green,
      cyan,
      blue,
      indigo,
      violet,
      red
    ); /* Standard syntax (must be last) */
`;

export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <RainbowBar />
        <StyledLogo src="/images/logo.svg" alt="Harmelodic Logo" />
      </StyledHeader>
    );
  }
}
