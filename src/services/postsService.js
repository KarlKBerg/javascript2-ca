import { get } from "./apiClient.js";

export async function getPosts() {
  const endpoint = "social/posts?_author=true";
  const response = await get(endpoint);
  return response.data;
}

function editPost() {}
function deletePost() {}

/*
export async function getPosts() {
  const endpoint = "social/posts?_author=true";
  try {
    const response = await get(endpoint);
    const posts = response.data;
    const container = document.querySelector(".posts-container");
    if (!container) return;
    container.innerHTML = "";
    posts.forEach((feedPost) => {
      renderPost(feedPost);
    });
  } catch (error) {
    throw error;
  }
}
*/
