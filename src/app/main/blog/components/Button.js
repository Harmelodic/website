import styled from 'styled-components';

export const Button = styled.button`
    display: ${props => props.visible ? 'inline-block' : 'none'};
    height: 40px;
    margin: 10px;
    background: #fff;
    border: solid 1px #bbb;
    border-radius: 5px;
    padding: 0 15px;
    font-size: 18px;
    color: #888;
    transition: border 200ms, color 200ms;

    &:focus {
        outline: none;
    }

    &:active {
        color: #333;
        border: solid 1px #333;
    }
`;
