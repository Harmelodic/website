import styled from 'styled-components';

export const LoadingTextBlock = styled.div`
    height: ${props => props.height ? props.height : '13'}px;
    width: ${props => props.width}px;
    margin: ${props => props.margin ? props.margin : '5'}px;
    border-radius: ${props => props.height ? props.height : '13'}px;
    background: ${props => props.color ? props.color : '#ccc'};
    background-image: linear-gradient(
        to right,
        ${props => props.color ? props.color : '#ccc'} 0%,
        rgba(255,255,255,0.5) 20%,
        ${props => props.color ? props.color : '#ccc'} 40%,
        ${props => props.color ? props.color : '#ccc'} 60%,
        ${props => props.color ? props.color : '#ccc'} 80%,
        ${props => props.color ? props.color : '#ccc'} 100%);
    background-repeat: no-repeat;
    background-size: 700 100px;
    
    animation-duration: 1300ms;
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
