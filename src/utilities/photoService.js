import * as PhotoAPI from "./photo-api";

export async function getAllPhotos() {
  const response = await PhotoAPI.getAllPhotos();
  const data = await response.json();
  return data;
}

export async function getOnePhoto(id) {
  const response = await PhotoAPI.getOnePhoto(id);
  const data = await response.json();
  return data;
}

export async function create() {
  const response = await PhotoAPI.createPhoto();
  const data = await response.json();
  return data;
}
export async function updatePhoto(id) {
  const response = await PhotoAPI.updatePhoto(id);
  const data = await response.json();
  return data;
}

export async function deletePhoto(id) {
  const response = await PhotoAPI.deletePhoto(id);
  const data = await response.json();
  return data;
}
