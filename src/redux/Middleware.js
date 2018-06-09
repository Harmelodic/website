import Actions from "./Actions";

export default class Middleware {

    // bp-frontend
    static updateHttpBinStatus() {
        return dispatch => {
            dispatch(Actions.requestHttpBinStatus());

            fetch("https://httpbin.org/status/200")
                .then(response => {
                    setTimeout(() => dispatch(Actions.receivedHttpBinStatus(response.status)), 3000)
                })
        }
    }
}