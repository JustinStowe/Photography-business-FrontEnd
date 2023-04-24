import { sendRequest } from "./send-request";
const BASE_URL = "https://sea-lion-app-pi8jx.ondigitalocean.app/photos";
export async function getAllPhotos() {
  const response = await sendRequest(BASE_URL, "GET");

  return response;
}

export async function getOnePhoto(id) {
  const response = await sendRequest(`${BASE_URL}/${id}`, "GET");

  return response;
}

export async function createPhoto(data) {
  console.log("data @ photoService", data);
  const response = await sendRequest(BASE_URL, "POST", data);
  return response;
}
export async function updatePhoto(id) {
  const response = await sendRequest(`${BASE_URL}/${id}`, "PUT");
  return response;
}

export async function deletePhoto(id) {
  const response = await sendRequest(`${BASE_URL}/${id}`, "DELETE");
  return response;
}
