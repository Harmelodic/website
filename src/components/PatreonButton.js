import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.a`
    display: block;
    margin: 10px auto 0 auto;
    width: 250px;
    height: 59px;
    background: #000;
`;

const StyledButton = styled.div`
    width: 250px;
    height: 59px;
    background-image: url('/images/become_a_patron_button@2x.png');
    background-size: contain;
    background-repeat: no-repeat;
    transition: 200ms opacity;

    &:hover {
        opacity: 0.9;
    }
`;

export default class PatreonButton extends React.Component {
  render() {
    return (
      <StyledWrapper href="https://www.patreon.com/harmelodic" target="_blank">
        <StyledButton />
      </StyledWrapper>
    );
  }
}
