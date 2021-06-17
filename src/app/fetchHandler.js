export async function request(method, url, body) {
	const request = {};
	request.method = method.toUpperCase();

	request.headers = new Headers();
	request.headers.append('Content-Type', 'application/json');

	if (!(request.method === 'GET' || request.method === 'HEAD')) {
		// To work with the Fetch API, the body needs to be turned into a string first.
		request.body = JSON.stringify(body);
	}

	try {
		const response = await fetch(url, request);
		if (response.ok) {
			return response;
		} else {
			logError(request, url, error);
		}
	} catch (error) {
		logError(request, url, error);
	}
}

function logError(request, url, error) {
	console.error(`Error occurred in completing ${request.method} request to: ${url}`);
	console.error(error);
}
