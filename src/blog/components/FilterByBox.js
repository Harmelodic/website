import styled from 'styled-components';

const FilterByBox = styled.select`
    appearance: none;

    background-image:
        linear-gradient(45deg, transparent 50%, #bbb 50%),
        linear-gradient(135deg, #bbb 50%, transparent 50%);
    background-position:
        calc(100% - 17px) calc(1em - 1px),
        calc(100% - 12px) calc(1em - 1px);
    background-size:
        5px 5px,
        5px 5px;
    background-repeat: no-repeat;
    
    display: inline-block;
    height: 40px;
    margin: 0 20px 20px 0;
    border: solid 1px #bbb;
    border-radius: 5px;
    padding: 0 35px 0 15px;
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

    &:hover {
        border: solid 1px #333;
    }

    &:focus::placeholder {
        color: transparent;
    }
`;

export default FilterByBox;
