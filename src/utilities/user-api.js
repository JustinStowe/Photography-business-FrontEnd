import { sendRequest } from "./send-request";

const BASE_URL = "https://sea-lion-app-pi8jx.ondigitalocean.app/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
export function changeUserDetails(userData) {
  return sendRequest(BASE_URL, "PUT", userData);
}
