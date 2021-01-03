import React from 'react';
import styled from 'styled-components';

export const StyledLoadingSign = styled.div`
  font-size: 16px;
  padding: 20px;
`;

export default class LoadingSign extends React.PureComponent {
  render() {
    return (
      <StyledLoadingSign>
        Loading...
      </StyledLoadingSign>
    );
  }
};
