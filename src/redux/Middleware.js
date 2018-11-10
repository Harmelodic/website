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
    static fetchProjects() {
        return dispatch => {
            httpCall("GET", "/resources/projects.json")
                .then(response => response.json().then(data => {
                    dispatch(Actions.setProjects(data));
                }))
        }
    }
}