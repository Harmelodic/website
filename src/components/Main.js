import styled from 'styled-components';

export const Main = styled.main`
    @keyframes complete-fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    animation: 
      complete-fade-in 
      ${props => props.fadeInTime ? props.fadeInTime : '800ms'};

    display: flex;
    padding-left: 20px;
    width: 100%;
    min-width: 300px;
    max-width: 1080px;

    padding-bottom: 40vh;
`;
