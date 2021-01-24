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
      ${(props) => props.fadeInTime ? props.fadeInTime : '800ms'};

    margin: 30px auto 0 auto;
    max-width: 1080px;
    text-align: center;
    white-space: normal;
`;
