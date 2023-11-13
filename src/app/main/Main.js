import styled from 'styled-components';
import { headerBarHeight } from '../header/HeaderBar';

export const Main = styled.main`
  @keyframes complete-fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  animation: complete-fade-in ${props => props.fadeInTime ? props.fadeInTime : '800ms'};

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-height: calc(100vh - ${headerBarHeight}px);
  overflow-y: auto;
  background: ${props => props.theme.colors.mainBackground};
`;
