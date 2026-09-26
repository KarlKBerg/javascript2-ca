import { BASE_URL, get, post, put, del } from "./apiClient.js";

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

export async function createPost(title, body) {
  const endpoint = `social/posts`;
  const newPost = {
    title: title,
    body: body,
  };
  const response = await post(endpoint, newPost);
  return response.data;
}

export async function updatePost(id, title, body) {
  const endpoint = `social/posts/${id}`;
  const updatePost = {
    title: title,
    body: body,
  };
  const response = await put(endpoint, updatePost);
  return response.data;
}

export async function deletePost(id) {
  const endpoint = `social/posts/${id}`;
  const response = await del(endpoint);
  return response.data;
}
