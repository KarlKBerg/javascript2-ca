import { updatePost } from "../services/postsService.js";
import { displayToastMessage } from "../utils/domHelpers.js";
import { renderFeed } from "./FeedController.js";
import { editPostId } from "./PostCard.js";

async function checkEditPost(id, updatedTitle, updatedBody) {
  const container = document.querySelector(".edit-post-modal");
  if (!updatedTitle) {
    container.classList.add("hidden");
    displayToastMessage("Post needs a title", "error");
    return;
  }
  try {
    await updatePost(id, updatedTitle, updatedBody);
    container.classList.add("hidden");
    renderFeed();
  } catch (error) {
    container.classList.add("hidden");
    displayToastMessage(error.message, "error");
  }
}

export function editPostListener() {
  const editForm = document.getElementById("edit-post");
  const cancelBtn = document.getElementById("cancel-edit-post-btn");
  const container = document.querySelector(".edit-post-modal");
  if (!container) return;
  cancelBtn.addEventListener("click", () => {
    container.classList.add("hidden");
  });
  editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTitle = document.getElementById("edit-post-title").value.trim();
    const newBody = document.getElementById("edit-post-message").value.trim();
    checkEditPost(editPostId, newTitle, newBody);
  });
}

export function populateEditModal(postTitle, postBody) {
  const titleField = document.getElementById("edit-post-title");
  const bodyField = document.getElementById("edit-post-message");
  titleField.value = postTitle;
  bodyField.value = postBody;
}
