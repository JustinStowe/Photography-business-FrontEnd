import { sendRequest, sendFileRequest } from "./send-request";

const BASE_URL = "http://localhost:3001/photos";

export async function getAllPhotos() {
  return sendRequest(BASE_URL, "GET");
}

export async function getOnePhoto(id) {
  return sendRequest(`${BASE_URL}/${id}`, "GET");
}

export async function createPhoto(data) {
  console.log("data @ photo-api:", data);
  return sendRequest(BASE_URL, "POST");
}

export async function updatePhoto(id, formDataObj) {
  return sendRequest(`${BASE_URL}/${id}`, "PUT", formDataObj);
}

export async function deletePhoto(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}
