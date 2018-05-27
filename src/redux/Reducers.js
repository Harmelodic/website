import { UPDATE_TEXT } from "./Actions";

export const rootReducer = (state, action) => {

    // bp-frontend
    let textValue;
    switch (action.type) {
        case UPDATE_TEXT:
            textValue = action.value
            break;
        default:
            textValue = state.text
            break;
    }

    return {
        text: textValue
    }
}
