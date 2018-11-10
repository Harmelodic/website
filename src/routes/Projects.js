import React from "react";
import Menu from "../components/Menu";
import { StyledFadeInDiv, StyledText } from "../components/Stylings";

export default class Projects extends React.Component {
    render() {
        return (
            <div>
                <Menu projects={true}/>
                <StyledFadeInDiv>
                    <StyledText>Project list</StyledText>
                </StyledFadeInDiv>
            </div>
        )
    }
}