import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { initialiseStore } from "./redux/Store";

initialiseStore();

const appRoot = document.getElementById("app");

ReactDOM.render(
    <App />,
    appRoot
);