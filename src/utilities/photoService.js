import { sendRequest } from "./send-request";
const BASE_URL = "http://localhost:3001/photos";
export async function getAllPhotos() {
  const response = await sendRequest(BASE_URL, "GET");

  return response;
}

export async function getOnePhoto(id) {
  const response = await sendRequest(`${BASE_URL}/${id}`, "GET");

  return response;
}

export async function create(data) {
  console.log("data @ photoService", data);
  const response = await sendRequest(BASE_URL, "POST", data);
  return response;
}
export async function updatePhoto(id, data) {
  const response = await sendRequest(`${BASE_URL}/${id}`, "PUT", data);
  return response;
}

export async function deletePhoto(id) {
  const response = sendRequest(`${BASE_URL}/${id}`, "DELETE");
  return response;
}
