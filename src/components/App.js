import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Header from "../components/Header";
import Projects from "../routes/Projects";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Redirect exact from="/" to="/projects" />
                    <Route path="/projects" component={Projects} />
                </Switch>
            </div>
        )
    }
}
