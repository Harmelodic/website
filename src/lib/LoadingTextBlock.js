import styled from 'styled-components';

export const LoadingTextBlock = styled.div`
    height: ${props => props.height ? props.height : '13'}px;
    width: ${props => props.width}px;
    margin: ${props => props.margin ? props.margin : '5'}px;
    border-radius: ${props => props.height ? props.height : '13'}px;
    background: ${props => props.color ? props.color : props.theme.font.loading.normal} no-repeat;
    background-image: linear-gradient(
        to right,
        ${props => props.color ? props.color : props.theme.font.loading.normal} 0%,
        ${props => props.theme.font.loading.wave} 20%,
        ${props => props.color ? props.color : props.theme.font.loading.normal} 40%,
        ${props => props.color ? props.color : props.theme.font.loading.normal} 60%,
        ${props => props.color ? props.color : props.theme.font.loading.normal} 80%,
        ${props => props.color ? props.color : props.theme.font.loading.normal} 100%
    );
    background-size: 700px 100px;
    
    animation-duration: 1800ms;
    animation-fill-mode: forwards; 
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: shimmer;

    @keyframes shimmer {
        0% {
            background-position: calc(-${props => props.width}px * 5) 0;
        }
        
        100% {
            background-position: calc(${props => props.width}px * 5) 0;
        }
    }
`;
