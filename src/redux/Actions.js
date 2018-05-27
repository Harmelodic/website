// Action Types
export const UPDATE_TEXT = "UPDATE_TEXT";

// Action Creators
export default class Actions {

    // bp-frontend
    static updateText(value) {
        return {
            type: UPDATE_TEXT,
            value: value
        }
    }
}
