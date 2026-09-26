import { createPost } from "../services/postsService.js";
import { displayToastMessage } from "../utils/domHelpers.js";
import { renderFeed } from "./FeedController.js";

async function checkCreatePost() {
  const titleField = document.getElementById("post-title").value.trim();
  const body = document.getElementById("post-message").value.trim();

  if (titleField === "") return;

  try {
    await createPost(titleField, body);
    renderFeed();
  } catch (error) {
    displayToastMessage(error.message, "error");
  }
}

export function createPostListener() {
  const form = document.getElementById("create-post-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkCreatePost();
  });
}
