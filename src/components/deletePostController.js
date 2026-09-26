import { displayToastMessage } from "../utils/domHelpers.js";
import { renderFeed } from "./FeedController.js";
import { deletePost } from "../services/postsService.js";

export async function deletePostAction(id) {
  try {
    await deletePost(id);
    renderFeed();
    displayToastMessage("Post deleted", "success");
  } catch (error) {
    displayToastMessage(error.message, "error");
  }
}
