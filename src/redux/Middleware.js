import Actions from "./Actions";

const httpCall = (method, url, body) => {
    let request = {};
    request.method = method.toUpperCase();

    request.headers = new Headers();
    request.headers.append("Content-Type", "application/json");

    if (!(request.method === "GET" || request.method === "HEAD")) {
        request.body = JSON.stringify(body); // To work with the Fetch API, the body needs to be stringified first.
    }

    return fetch(url, request)
        .catch(error => {
            console.log("Error occurred in completing " + request.method + " request to: " + url + " \n" + error);
        })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                throw response;
            }
        })
}

export default class Middleware {
    // bp-frontend
    static fetchHttpBinStatus() {
        return dispatch => {
            dispatch(Actions.setHttpBinStatusLoading(true));

            const responseCodeXX = Math.floor(Math.random() * Math.floor(4)) + 2;

            httpCall("GET", "https://httpbin.org/status/" + responseCodeXX + "00")
                .then(response => {
                    // Any 2xx response
                    dispatch(Actions.setHttpBinStatus(response.status));
                })
                .catch(response => {
                    // Any non-2xx response
                    dispatch(Actions.setHttpBinStatus(response.status));
                })
        }
    }
}