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

    animation: complete-fade-in ${props => props.fadeInTime ? props.fadeInTime : '800ms'};

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: calc(100% - 15px);
    max-width: 1200px;
    margin: 0 auto;
    overflow-y: auto;
    background: ${props => props.theme.colors.mainBackground};
`;
