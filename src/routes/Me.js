import React from "react";
import Menu from "../components/Menu";

export default class Me extends React.Component {
    render() {
        return (
            <div>
                <Menu me={true} />
            </div>
        )
    }
}