import {
    SET_HTTP_BIN_STATUS_LOADING,
    SET_HTTP_BIN_STATUS,
    UPDATE_EDITABLE_TEXT
} from "./Actions";

export const rootReducer = (state, action) => {
    // bp-frontend
    return {
        editableText: editableTextReducer(state.editableText, action),
        httpbin: httpbinReducer(state.httpbin, action)
    }
}

// bp-frontend
export const editableTextReducer = (editableTextState, action) => {
    let editableText = editableTextState;

    switch (action.type) {
        case UPDATE_EDITABLE_TEXT:
            editableText = action.value
            break;
    }

    return editableText;
}

// bp-frontend
export const httpbinReducer = (httpbinState, action) => {
    let httpbin = Object.assign({}, httpbinState);

    switch (action.type) {
        case SET_HTTP_BIN_STATUS_LOADING:
            httpbin.loading = action.value;
            break;
        case SET_HTTP_BIN_STATUS:
            httpbin.loading = false;
            httpbin.status = action.status;
            break;
    }

    return httpbin;
}
