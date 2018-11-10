import Actions from "./Actions";

export default class InternalMiddleware {

    // Modals
    static modalConfirm(modalOptions, onOkCallback) {
        return dispatch => {
            dispatch(Actions.openModal(modalOptions));

            function handleOk() {
                if (onOkCallback) onOkCallback();
                document.dispatchEvent(new Event("MODAL_CLOSE"));
            }

            function handleCloseModal() {
                dispatch(Actions.closeModal());

                // Clean up EventListeners to prevent leaking EventListeners
                document.removeEventListener("MODAL_OK", handleOk);
                document.removeEventListener("MODAL_CLOSE", handleCloseModal);
            }

            // Event
            document.addEventListener("MODAL_OK", handleOk);
            document.addEventListener("MODAL_CLOSE", handleCloseModal);
        }
    }
}