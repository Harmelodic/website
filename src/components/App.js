import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import BpFrontend from "../routes/BpFrontend";

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect exact from="/" to="/bp-frontend" />
                <Route path="/bp-frontend" component={BpFrontend} />
            </Switch>
        )
    }
}
