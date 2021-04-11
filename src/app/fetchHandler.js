export async function request(method, url, body) {
  const request = {};
  request.method = method.toUpperCase();

  request.headers = new Headers();
  request.headers.append('Content-Type', 'application/json');

  if (!(request.method === 'GET' || request.method === 'HEAD')) {
    // To work with the Fetch API, the body needs to be stringified first.
    request.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, request);
    if (response.ok) {
      return response;
    } else {
      throw response;
    }
  } catch (error) {
    console.error(`Error occurred in completing ${request.method} request to: ${url}`);
    console.error(error);
  }
};
