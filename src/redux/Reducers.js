import { UPDATE_TEXT, REQUEST_HTTPBIN_STATUS, RECEIVED_HTTPBIN_STATUS } from "./Actions";

export const rootReducer = (state, action) => {
    // bp-frontend
    return {
        text: textReducer(state.text, action),
        httpbin: httpbinReducer(state.httpbin, action)
    }
}

// bp-frontend
export const textReducer = (text, action) => {
    let textValue;
    switch (action.type) {
        case UPDATE_TEXT:
            textValue = action.value
            break;
        default:
            textValue = text
            break;
    }
    return textValue;
}

// bp-frontend
export const httpbinReducer = (httpbinState, action) => {
    let httpbinValue;
    switch (action.type) {
        case REQUEST_HTTPBIN_STATUS:
            httpbinValue = {
                loading: true,
                status: httpbinState.status
            }
            break;
        case RECEIVED_HTTPBIN_STATUS:
            httpbinValue = {
                loading: false,
                status: action.status
            }
            break;
        default:
            httpbinValue = httpbinState
            break;
    }
    return httpbinValue;
}
