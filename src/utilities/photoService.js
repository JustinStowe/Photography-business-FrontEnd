import * as PhotoAPI from "./photo-api";

export async function getAllPhotos() {
  const response = await PhotoAPI.getAllPhotos();

  return response;
}

export async function getOnePhoto(id) {
  const response = await PhotoAPI.getOnePhoto(id);

  return response;
}

export async function create(data) {
  console.log("data @ photoService", data);
  const response = await PhotoAPI.createPhoto(data);
  return response;
}
export async function updatePhoto(id, photoData) {
  const response = await PhotoAPI.updatePhoto(id, photoData);
  return response;
}

export async function deletePhoto(id) {
  const response = await PhotoAPI.deletePhoto(id);
  return response;
}
