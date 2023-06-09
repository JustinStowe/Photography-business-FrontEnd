import { useNavigate } from "react-router-dom";
import * as usersAPI from "./user-api";

export async function signUp(userData) {
  console.log("userData", userData);

  // Delete the network request code to the
  // users-api.js module which will ultimately
  // return the JWT
  const token = await usersAPI.signUp(userData);
  // Persist the token to localStorage
  window.localStorage.setItem("token", token);
  return getUser();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  // Persist the token to window.localStorage
  window.localStorage.setItem("token", token);
  return getUser();
}

export function getToken() {
  const token = window.localStorage.getItem("token");
  // getItem will return null if no key
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's expiration is expressed in seconds, not miliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    window.localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  window.localStorage.removeItem("token");
}

export async function changeDetails(userData) {
  console.log("Feature still under construction.");
  const token = await usersAPI.changeUserDetails(userData);
  window.localStorage.setItem("token", token);
  return token;
}
