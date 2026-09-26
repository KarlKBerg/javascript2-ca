import { displayToastMessage } from "../utils/domHelpers.js";
import { renderFeed } from "./FeedController.js";
import { deletePost } from "../services/postsService.js";

export async function deletePostAction(id) {
  try {
    confirm("Delete post?");
    await deletePost(id);
    window.location.href = "feed.html";
    renderFeed();
    displayToastMessage("Post deleted", "success");
  } catch (error) {
    displayToastMessage(error.message, "error");
  }
}
