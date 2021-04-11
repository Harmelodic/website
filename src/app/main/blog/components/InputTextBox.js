import styled from 'styled-components';

export const InputTextBox = styled.input`
    display: inline-block;
    max-width: 270px;
    height: 40px;
    margin: 0 20px 20px 0;
    border: solid 1px #bbb;
    border-radius: 5px;
    padding: 0 15px;
    font-size: 18px;
    color: #333;
    transition: border 200ms;

    &::placeholder {
        color: #aaa;
        transition: color 200ms;
    }

    &:focus {
        outline: none;
        border: solid 1px #333;
    }

    &:focus::placeholder {
        color: transparent;
    }
`;
