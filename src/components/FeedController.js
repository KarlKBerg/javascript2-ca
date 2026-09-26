import { getPosts } from "../services/postsService.js";
import { getToken } from "../storage/storage.js";
import { displayToastMessage } from "../utils/domHelpers.js";
import { renderPost } from "./PostCard.js";
import { renderSinglePost } from "./PostController.js";

export async function renderFeed() {
  try {
    const posts = await getPosts();
    const container = document.querySelector(".posts-container");
    if (!container) return;
    container.innerHTML = "";
    posts.forEach((post) => {
      renderPost(post, "posts-container");
    });
  } catch (error) {
    displayToastMessage(error.message, "error");
  }
}

export function pageCheck() {
  const feed = document.getElementById("feed");
  const loginPage = document.getElementById("login");
  const postPage = document.getElementById("post");
  const profilePage = document.getElementById("profile");
  const token = getToken();

  if (feed || profilePage) {
    if (!token) {
      window.location.href = "index.html";
    } else {
      renderFeed();
    }
  }

  if (loginPage) {
    if (token) {
      window.location.href = "feed.html";
    }
  }

  if (postPage) {
    if (!token) {
      window.location.href = "index.html";
    } else {
      renderSinglePost();
    }
  }
}
