import { fetchProfile } from "../services/profileService.js";
import { getProfile } from "../storage/storage.js";
import { renderProfile } from "./Profile.js";

export async function initProfile() {
  let username = getProfile().name;
  let user = await fetchProfile(username);
  renderProfile(user);
}
