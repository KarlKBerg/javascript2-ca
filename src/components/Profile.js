import { getProfile } from "../storage/storage.js";

export function renderProfile(user) {
  const container = document.querySelector(".profile-container");
  const currentUser = getProfile().name;
  if (!container) return;
  container.innerHTML = "";

  const userImgInfoDiv = document.createElement("div");
  userImgInfoDiv.classList.add("user-img-info");

  const profileImg = document.createElement("img");
  profileImg.classList.add("circle");
  profileImg.src = user?.avatar?.url;

  const userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("user-info");

  const username = document.createElement("span");
  username.id = "username";
  username.textContent = user?.name;

  const followCountDiv = document.createElement("div");
  followCountDiv.classList.add("follow-count");

  const followingDiv = document.createElement("div");
  followingDiv.classList.add("follow");

  const followingTitle = document.createElement("span");
  followingTitle.textContent = "Following";

  const followingCount = document.createElement("span");
  followingCount.textContent = user._count.following;

  const followerDiv = document.createElement("div");
  followerDiv.classList.add("follow");

  const followerTitle = document.createElement("span");
  followerTitle.textContent = "Followers";

  const followerCount = document.createElement("span");
  followerCount.textContent = user._count.followers;

  const editProfileButton = document.createElement("button");
  editProfileButton.textContent = "Edit profile";
  editProfileButton.classList.add("edit-profile-btn");

  const followButton = document.createElement("button");
  followButton.textContent = "Follow";
  followButton.classList.add("follow-user");

  container.appendChild(userImgInfoDiv);
  userImgInfoDiv.appendChild(profileImg);
  userImgInfoDiv.appendChild(userInfoDiv);
  userInfoDiv.appendChild(username);
  userInfoDiv.appendChild(followCountDiv);
  followCountDiv.appendChild(followingDiv);
  followingDiv.appendChild(followingTitle);
  followingDiv.appendChild(followingCount);
  followCountDiv.appendChild(followerDiv);
  followerDiv.appendChild(followerTitle);
  followerDiv.appendChild(followerCount);
  if (user.name === currentUser) {
    container.appendChild(editProfileButton);
  } else {
    container.appendChild(followButton);
  }
}
