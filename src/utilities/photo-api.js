import sendRequest from "./send-request";

const BASE_URL = "http://localhost:3001/photos";

export async function getAllPhotos() {
  return sendRequest(BASE_URL, "GET");
}

export async function getOnePhoto(id) {
  return sendRequest(`${BASE_URL}/${id}`, "GET");
}

export async function createPhoto() {
  return sendRequest(BASE_URL, "POST");
}

export async function updatePhoto(id) {
  return sendRequest(`${BASE_URL}/${id}`, "PUT");
}

export async function deletePhoto(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}
