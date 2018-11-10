import React from "react";
import Menu from "../components/Menu";
import { StyledFadeInDiv, StyledText } from "../components/Stylings";

export default class Me extends React.Component {
    render() {
        return (
            <div>
                <Menu me={true} />
                <StyledFadeInDiv>
                    <StyledText>Hey it me</StyledText>
                </StyledFadeInDiv>
            </div>
        )
    }
}