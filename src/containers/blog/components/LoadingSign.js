import styled from 'styled-components';

export const StyledLoadingSign = styled.div`
  font-size: 16px;
  padding: 20px;
`;

export default function LoadingSign() {
  return (
    <StyledLoadingSign>
      Loading...
    </StyledLoadingSign>
  );
}
