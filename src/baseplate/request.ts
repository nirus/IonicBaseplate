/** Contains the custom response type  */
export type BaseplateResp = string | object | null | Response;

/**
 * Parses the JSON / Text returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object | string} The parsed JSON or Text from the request
 */
function responseParser(response: Response): BaseplateResp {
    const contentType = response.headers.get("content-type");
    if (response.status === 204 || response.status === 205) {
        return null;
    }

    if (contentType) {
        if (contentType.indexOf("application/json") !== -1) {
            return response.json();
        } else if (contentType.indexOf("text/plain") !== -1) {
            return response.text();
        }
    }
    
    return response;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: Response): any {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error: { [key: string]: any } = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url: RequestInfo, options: RequestInit | undefined): Promise<BaseplateResp> {
    return fetch(url, options)
        .then(checkStatus)
        .then(responseParser);
}
