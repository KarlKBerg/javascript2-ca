import { updatePost } from "../services/postsService.js";
import { displayToastMessage } from "../utils/domHelpers.js";
import { renderFeed } from "./FeedController.js";

async function checkEditPost(id, updatedTitle, updatedBody) {
  const container = document.querySelector(".edit-post-modal");
  if (!updatedTitle) {
    container.classList.add("hidden");
    displayToastMessage("Post needs a title", "error");
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

export function editPostListener(id, postTitle, postBody) {
  const titleField = document.getElementById("edit-post-title");
  const bodyField = document.getElementById("edit-post-message");
  const editForm = document.getElementById("edit-post");
  const cancelBtn = document.getElementById("cancel-edit-post-btn");

  titleField.value = postTitle;
  bodyField.value = postBody;
  cancelBtn.addEventListener("click", () => {
    container.classList.add("hidden");
  });
  editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTitle = document.getElementById("edit-post-title").value.trim();
    const newBody = document.getElementById("edit-post-message").value.trim();
    checkEditPost(id, newTitle, newBody);
  });
}
