import { BASE_URL } from "./apiClient.js";

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
