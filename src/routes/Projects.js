import React from "react";
import Menu from "../components/Menu";

export default class Projects extends React.Component {
    render() {
        return (
            <div>
                <Menu projects={true}/>
            </div>
        )
    }
}