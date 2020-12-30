export default class FetchHandler {
  static request(method, url, body) {
    const request = {};
    request.method = method.toUpperCase();

    request.headers = new Headers();
    request.headers.append('Content-Type', 'application/json');

    if (!(request.method === 'GET' || request.method === 'HEAD')) {
      // To work with the Fetch API, the body needs to be stringified first.
      request.body = JSON.stringify(body);
    }

    return fetch(url, request)
        .catch((error) => {
          // eslint-disable-next-line max-len
          console.log(`Error occurred in completing ${request.method} request to: ${url}`);
          console.log(error);
        })
        .then((response) => {
          if (response.ok) {
            return response;
          } else {
            throw response;
          }
        });
  };
}
