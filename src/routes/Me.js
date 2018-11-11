import React from "react";
import Menu from "../components/Menu";
import { StyledFadeInDiv } from "../components/Stylings";

export default class Me extends React.Component {
    render() {
        return (
            <div>
                <Menu me={true} />
                <StyledFadeInDiv>
                    {/* 
                        About Me Description
                        Social Media Links
                        Blog Link
                    */}
                </StyledFadeInDiv>
            </div>
        )
    }
}