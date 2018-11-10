import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Header from "../components/Header";
import Projects from "../routes/Projects";
import OpenSource from "../routes/OpenSource";
import Me from "../routes/Me";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Redirect exact from="/" to="/projects" />
                    <Route path="/projects" component={Projects} />
                    <Route path="/open-source" component={OpenSource} />
                    <Route path="/me" component={Me} />
                </Switch>
            </div>
        )
    }
}
