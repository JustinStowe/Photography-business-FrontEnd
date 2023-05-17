import { sendRequest } from "./send-request";

const BASE_URL = "";

export function getUsers() {
  return sendRequest(BASE_URL, "GET");
}

export function getAllPhotos() {
  return sendRequest(BASE_URL, "GET");
}
