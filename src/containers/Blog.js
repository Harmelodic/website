import React from 'react';
import Menu from '../components/Menu';
import styled from 'styled-components';
import { StyledFadeInDiv } from '../components/Stylings';

const Message = styled.p`
  font-size: 16px;
  text-align: center;
`;

export default class Scribbles extends React.Component {
  render() {
    return (
      <div>
        <Menu blog={true} />
        <StyledFadeInDiv>
          <Message>My blog is currently found here: <a href="https://scribbles.harmelodic.com">https://scribbles.harmelodic.com</a></Message>
        </StyledFadeInDiv>
      </div>
    );
  }
};
