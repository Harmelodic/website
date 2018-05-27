import { rootReducer } from "./Reducers";
import { createStore } from "redux";

export let Store;

export const initialiseStore = () => {
    Store = createStore(rootReducer, initialState);
}

const initialState = {

    // bp-frontend
    text: "Change me!"
}