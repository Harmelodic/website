// Action Types
export const UPDATE_TEXT = "UPDATE_TEXT";
export const REQUEST_HTTPBIN_STATUS = "REQUEST_HTTPBIN_STATUS";
export const RECEIVED_HTTPBIN_STATUS = "RECEIVED_HTTPBIN_STATUS";

// Action Creators
export default class Actions {

    // bp-frontend
    static updateText(value) {
        return {
            type: UPDATE_TEXT,
            value: value
        }
    }

    static requestHttpBinStatus() {
        return {
            type: REQUEST_HTTPBIN_STATUS,
        }
    }

    static receivedHttpBinStatus(status) {
        return {
            type: RECEIVED_HTTPBIN_STATUS,
            status: status
        }
    }
}
