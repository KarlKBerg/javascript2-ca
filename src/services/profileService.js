import { get } from "./apiClient.js";

export async function fetchProfile(username) {
  const endpoint = `social/profiles/${username}`;
  const response = await get(endpoint);
  return response.data;
}

export async function fetchProfilePosts(username) {
  const endpoint = `social/profiles/${username}/posts?_author=true`;
  const response = await get(endpoint);
  return response.data;
}
