import { getToken } from "./user-service";

export async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };
  if (payload) {
    // console.log("payload b4 stringify @ sendRequest:", payload);
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
    // console.log("payload after stringify @ sendRequest:", options.body);
  }
  const token = getToken();
  if (token) {
    options.headers = options.headers || {};

    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  if (res.ok) {
    const json = await res.json();
    return json;
  } else {
    throw new Error(`Request failed with status ${res.status}`);
  }
}
