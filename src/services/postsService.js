import { get } from "./apiClient.js";

export async function getPosts() {
  const endpoint = "social/posts?_author=true";
  const response = await get(endpoint);
  return response.data;
}

export async function getSinglePost(id) {
  const endpoint = `social/posts/${id}?_author=true`;
  const response = await get(endpoint);
  return response.data;
}
