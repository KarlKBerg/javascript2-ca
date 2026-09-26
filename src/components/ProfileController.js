import { fetchProfile, fetchProfilePosts } from "../services/profileService.js";
import { getProfile } from "../storage/storage.js";
import { renderProfile } from "./Profile.js";
import { renderPost } from "./PostCard.js";
import { displayToastMessage } from "../utils/domHelpers.js";

export async function initProfile() {
  const url = new URLSearchParams(window.location.search);
  const params = url.get("name");
  let username = params;
  if (!username) return;
  try {
    let user = await fetchProfile(username);
    renderProfile(user);
  } catch (error) {
    displayToastMessage(error.message, "error");
  }
}

export async function initProfilePosts() {
  const url = new URLSearchParams(window.location.search);
  const params = url.get("name");
  let username = params;
  try {
    let posts = await fetchProfilePosts(username);
    posts.forEach((post) => {
      renderPost(post, "user-posts-container");
    });
  } catch (error) {
    displayToastMessage(error.message, "error");
  }
}

export function myProfile() {
  const profileLink = document.getElementById("profile-link");
  if (!profileLink) return;
  const username = getProfile().name;
  if (!username) return;
  profileLink.href = `profile.html?name=${username}`;
}
