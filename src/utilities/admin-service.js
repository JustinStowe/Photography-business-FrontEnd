import * as adminAPI from "./admin-api";

export async function getAllUsers() {
  const users = await adminAPI.getUsers();
  console.log("user data @ admin-service", users);
  return users;
}

export async function getAllPhotos() {
  const photos = await adminAPI.getAllPhotos();
  console.log("all photos @ admin-service", photos);
  return photos;
}
