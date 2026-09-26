import { getSinglePost } from "../services/postsService.js";
import { displayToastMessage } from "../utils/domHelpers.js";
import { renderPost } from "./PostCard.js";

export async function renderSinglePost() {
  const url = new URLSearchParams(window.location.search);
  const urlId = url.get("id");
  try {
    const singlePost = await getSinglePost(urlId);
    const container = document.getElementById("post-container");
    if (!container) return;
    container.innerHTML = "";
    renderPost(singlePost, "post-container");
  } catch (error) {
    displayToastMessage(error.message, "error");
  }
}
