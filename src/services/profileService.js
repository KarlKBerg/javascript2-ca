import { get } from "./apiClient.js";

export async function fetchProfile(username) {
  const endpoint = `social/profiles/${username}`;
  const response = await get(endpoint);
  return response.data;
}
