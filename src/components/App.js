import Actions from "../redux/Actions";
import React from "react";
import { Store } from "../redux/Store";
import styled from "styled-components";

// bp-frontend
const StyledApp = styled.div`
    text-align: center;
    font-size: 16px;
`

// bp-frontend
const StyledText = styled.div`
    margin: 20px auto;
`

// bp-frontend
const StyledImg = styled.img`
    display: block;
    margin: 50px auto;
    width: 200px;
    height: 200px;
`

// bp-frontend
const StyledInput = styled.input`
    margin: 5px auto 5px auto;
    display: block;
    font-size: 16px;
    text-align: center;
`

export default class App extends React.Component {
    constructor(props) {
        super(props);

        // bp-frontend
        this.state = {
            inputValue: "",
            text: Store.getState().text
        }

        // bp-frontend
        Store.subscribe(() => {
            this.setState({
                text: Store.getState().text
            })
        })

        // bp-frontend
        this.changeInputValue = this.changeInputValue.bind(this);
        this.changeText = this.changeText.bind(this);
    }

    // bp-frontend
    changeInputValue(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    // bp-frontend
    changeText(event) {
        event.preventDefault();
        Store.dispatch(Actions.updateText(this.state.inputValue));
    }

    render() {
        return (
            // bp-frontend
            <StyledApp>
                <StyledImg src="images/bp-frontend.svg" />
                <StyledText>Change the text.</StyledText>
                <StyledInput type="text" name="inputText" value={this.state.inputValue} onChange={this.changeInputValue} placeholder="Enter text here" />
                <StyledInput type="submit" value="Submit" onClick={this.changeText} />
                <StyledText>{this.state.text}</StyledText>
            </StyledApp>
        );
    }
}
