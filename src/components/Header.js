import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    height: 300px;
    background: #000;
`;

const StyledLogo = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
    height: 300px;
    width: 300px;
    user-select: none;
`;

const RainbowBar = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    height: 9px;
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
        <StyledLogo src="/images/logo.svg" />
      </StyledHeader>
    );
  }
}
