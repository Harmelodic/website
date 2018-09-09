import React from "react";
import styled from "styled-components";
import Actions from "../redux/Actions";
import Middleware from "../redux/Middleware";
import { Store } from "../redux/Store";

// bp-frontend
const StyledBpFrontend = styled.div`
    text-align: center;
    font-size: 16px;
`

const StyledSection = styled.div`
    max-width: 1080px;
    width: 60%;
    margin: 0 auto;
    border-top: 1px double #999999;
    padding: 30px 0;
`

// bp-frontend
const StyledText = styled.div`
    font-size: 16px;
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

export default class BpFrontend extends React.Component {
    constructor(props) {
        super(props);

        // bp-frontend
        this.state = {
            inputValue: "",
            editableText: Store.getState().editableText,
            httpbin: Store.getState().httpbin
        }

        // bp-frontend
        this.changeInputValue = this.changeInputValue.bind(this);
        this.changeEditableText = this.changeEditableText.bind(this);
    }

    // bp-frontend
    changeInputValue(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    // bp-frontend
    changeEditableText(event) {
        event.preventDefault();
        Store.dispatch(Actions.updateEditableText(this.state.inputValue));
    }

    changeHttpBinStatus(event) {
        event.preventDefault();
        Store.dispatch(Middleware.fetchHttpBinStatus());
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            // bp-frontend
            this.setState({
                editableText: Store.getState().editableText,
                httpbin: Store.getState().httpbin
            })
        });
        // bp-frontend
        Store.dispatch(Middleware.fetchHttpBinStatus());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            // bp-frontend
            <StyledBpFrontend>
                <StyledImg src="images/bp-frontend.png" />
                <StyledSection>
                    <StyledText>Change the text.</StyledText>
                    <StyledInput type="text" name="inputText" value={this.state.inputValue} onChange={this.changeInputValue} placeholder="Enter text here" />
                    <StyledInput type="submit" value="Submit" onClick={this.changeEditableText} />
                    <StyledText>{this.state.editableText}</StyledText>
                </StyledSection>
                <StyledSection>
                    <StyledText>HTTP Bin Status: {this.state.httpbin.loading ? "Loading..." : this.state.httpbin.status}</StyledText>
                    <StyledInput type="submit" value="Change HTTP Bin Status" onClick={this.changeHttpBinStatus} />
                </StyledSection>
            </StyledBpFrontend>
        );
    }
}
