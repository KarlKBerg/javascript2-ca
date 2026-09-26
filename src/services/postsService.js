import { BASE_URL, get, post } from "./apiClient.js";

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

export async function createPost(title, message) {
  const endpoint = `social/posts`;
  const newPost = {
    title: title,
    body: message,
  };
  const response = await post(endpoint, newPost);
  return response.data;
}
