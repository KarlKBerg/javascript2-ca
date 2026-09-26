import { removeToken, setProfile, setToken } from "../storage/storage.js";
import { BASE_URL } from "./apiClient.js";
import { post } from "./apiClient.js";

const LOGIN_ENDPOINT = "auth/login";

export async function registerUser(username, email, password) {
  const endpoint = "auth/register";
  const newUser = {
    name: username,
    email: email,
    password: password,
  };

  const postData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  };
  const response = await fetch(BASE_URL + endpoint, postData);
  if (!response.ok) {
    throw new Error("Registration failed with status: " + response.status);
  }
  return await response.json();
}

export async function loginUser(credentials) {
  try {
    const response = await post(LOGIN_ENDPOINT, credentials);
    const { accessToken, ...profile } = response.data;

    if (accessToken) {
      setToken(accessToken);
      setProfile(profile);
      return profile;
    } else {
      throw new Error("Login successful, but no access token recieved!");
    }
  } catch (error) {
    throw error;
  }
}

export function logoutUser() {
  removeToken();
  localStorage.removeItem("profile");
  window.location.href = "index.html";
}
