import { getProfile } from "../storage/storage.js";
import { followCheck } from "../utils/validation.js";
import { followUser, unFollowUser } from "../services/profileService.js";
import { displayToastMessage } from "../utils/domHelpers.js";

export function renderProfile(user, initFn) {
  const container = document.querySelector(".profile-container");
  const currentUser = getProfile().name;
  if (!container) return;
  container.innerHTML = "";

  const userImgInfoDiv = document.createElement("div");
  userImgInfoDiv.classList.add(
    "user-img-info",
    "flex",
    "gap-2",
    "md:gap-4",
    "lg:gap-6",
  );

  const profileImg = document.createElement("img");
  profileImg.classList.add(
    "circle",
    "w-25",
    "h-25",
    "rounded-full",
    "bg-white",
  );
  profileImg.src = user?.avatar?.url;

  const userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("user-info", "flex", "flex-col", "justify-between");

  const username = document.createElement("span");
  username.id = "username";
  username.classList.add("font-bold");
  username.textContent = user?.name;

  const followCountDiv = document.createElement("div");
  followCountDiv.classList.add(
    "follow-count",
    "flex",
    "gap-2",
    "md:gap-4",
    "lg:gap-6",
    "text-sm",
    "md:text-md",
  );

  const followingDiv = document.createElement("div");
  followingDiv.classList.add(
    "follow",
    "flex",
    "flex-col",
    "items-center",
    "gap-1",
  );

  const followingTitle = document.createElement("span");
  followingTitle.textContent = "Following";

  const followingCount = document.createElement("span");
  followingCount.textContent = user._count.following;

  const followerDiv = document.createElement("div");
  followerDiv.classList.add(
    "follow",
    "flex",
    "flex-col",
    "items-center",
    "gap-1",
  );

  const followerTitle = document.createElement("span");
  followerTitle.textContent = "Followers";

  const followerCount = document.createElement("span");
  followerCount.textContent = user._count.followers;

  const editProfileButton = document.createElement("button");
  editProfileButton.textContent = "Edit";
  editProfileButton.classList.add(
    "edit-profile-btn",
    "self-start",
    "text-white",
    "px-2",
    "md:px-4",
    "lg:px-6",
    "py-1",
    "md:py-2",
    "lg:py-3",
    "rounded-md",
    "hover:bg-gray-800",
    "bg-bcg-main",
    "hover:cursor-pointer",
  );

  const followButton = document.createElement("button");
  followButton.id = "follow-btn";
  followButton.textContent = "Follow";
  followButton.classList.add("follow-user");

  const unFollowButton = document.createElement("button");
  unFollowButton.id = "unfollow-btn";
  unFollowButton.textContent = "Unfollow";
  unFollowButton.classList.add("unfollow-user");

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
    if (!followCheck(user.followers)) {
      container.appendChild(followButton);
      followButton.addEventListener("click", async () => {
        try {
          await followUser(user.name);
          initFn();
        } catch (error) {
          displayToastMessage(error.message, "error");
        }
      });
    } else {
      container.appendChild(unFollowButton);
      unFollowButton.addEventListener("click", async () => {
        try {
          await unFollowUser(user.name);
          initFn();
        } catch (error) {
          displayToastMessage(error.message, "error");
        }
      });
    }
  }
}
