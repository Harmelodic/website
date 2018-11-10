import styled from "styled-components";

export const StyledFadeInDiv = styled.div`
    @keyframes complete-fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    animation: complete-fade-in ${props => props.fadeInTime ? props.fadeInTime : "800ms"};
`

export const StyledText = styled.span`
    font-size: 16px;
`