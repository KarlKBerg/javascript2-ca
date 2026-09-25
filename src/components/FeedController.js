import { getPosts } from "../services/postsService.js";
import { renderPost } from "./PostCard.js";

async function renderFeed() {
  const posts = await getPosts();
  posts.forEach((post) => {
    renderPost(post);
  });
}

export function pageCheck() {
  const feed = document.getElementById("feed");
  const loginPage = document.getElementById("login");
  const postPage = document.getElementById("post");
  const profilePage = document.createElement("profile");
  const token = localStorage.getItem("accessToken");

  if (feed || postPage || profilePage) {
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
}
