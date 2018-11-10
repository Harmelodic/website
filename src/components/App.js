import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../routes/Home";

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        )
    }
}
