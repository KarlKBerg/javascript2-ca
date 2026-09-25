import { get } from "./apiClient.js";

export async function renderFeed() {
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

function editPost() {}
function deletePost() {}
