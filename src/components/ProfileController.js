import { fetchProfile, fetchProfilePosts } from "../services/profileService.js";
import { getProfile } from "../storage/storage.js";
import { renderProfile } from "./Profile.js";
import { renderPost } from "./PostCard.js";

export async function initProfile() {
  let username = getProfile().name;
  let user = await fetchProfile(username);
  renderProfile(user);
}

export async function initProfilePosts() {
  let username = getProfile().name;
  let user = await fetchProfile(username);
  let posts = await fetchProfilePosts(username);
  posts.forEach((post) => {
    renderPost(post, "user-posts-container");
    console.log(post);
  });
}
