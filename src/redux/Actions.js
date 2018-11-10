// Action Types
export const SET_HTTP_BIN_STATUS_LOADING = "SET_HTTP_BIN_STATUS_LOADING";
export const SET_HTTP_BIN_STATUS = "SET_HTTP_BIN_STATUS";
export const UPDATE_EDITABLE_TEXT = "UPDATE_EDITABLE_TEXT";

// Action Creators
export default class Actions {

    // bp-frontend
    static updateEditableText(value) {
        return {
            type: UPDATE_EDITABLE_TEXT,
            value: value
        }
    }

    // bp-frontend
    static setHttpBinStatusLoading(boolean) {
        return {
            type: SET_HTTP_BIN_STATUS_LOADING,
            value: boolean
        }
    }

    // bp-frontend
    static setHttpBinStatus(status) {
        return {
            type: SET_HTTP_BIN_STATUS,
            status: status
        }
    }
}
