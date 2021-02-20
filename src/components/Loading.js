import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
  font-size: 20px;
  text-align: center;
`;

export default class Loading extends React.PureComponent {
  render() {
    return (
      <StyledLoading>
        <p>Loading...</p>
      </StyledLoading>
    );
  }
}