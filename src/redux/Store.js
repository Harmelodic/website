import { rootReducer } from "./Reducers";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import devToolsEnhancer from 'remote-redux-devtools';

export let Store;

export const initialiseStore = () => {
    Store = createStore(
        rootReducer,
        initialState,
        // bp-frontend
        compose(
            applyMiddleware(thunk),
            devToolsEnhancer()
        )
    );
}

const initialState = {

    // bp-frontend
    text: "Change me!",
    httpbin: {
        loading: false,
        status: "Unset Status"
    }
}