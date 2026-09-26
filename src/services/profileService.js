import { get, put } from "./apiClient.js";

export async function fetchProfile(username) {
  const endpoint = `social/profiles/${username}?_followers=true`;
  const response = await get(endpoint);
  return response.data;
}

export async function fetchProfilePosts(username) {
  const endpoint = `social/profiles/${username}/posts?_author=true`;
  const response = await get(endpoint);
  return response.data;
}

export async function followUser(name) {
  const endpoint = `social/profiles/${name}/follow`;
  const response = await put(endpoint);
  return response.data;
}

export async function unFollowUser(name) {
  const endpoint = `social/profiles/${name}/unfollow`;
  const response = await put(endpoint);
  return response.data;
}
