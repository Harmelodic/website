import styled from 'styled-components';

const StyledLoadingSign = styled.div`
  font-size: 16px;
  padding: 20px;
`;

export function LoadingSign() {
  return (
    <StyledLoadingSign>
      Loading...
    </StyledLoadingSign>
  );
}
