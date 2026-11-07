import { getProfile } from "../storage/storage.js";
import { deletePostAction } from "./deletePostController.js";
import { populateEditModal } from "./EditPostController.js";
export let editPostId;

export function renderPost(post, containerId) {
  const container = document.getElementById(containerId);
  const postDiv = document.createElement("div");
  postDiv.classList.add(
    "post",
    "flex",
    "flex-col",
    "gap-1",
    "px-2",
    "py-1",
    "bg-bcg-main",
    "rounded-md",
    "w-full",
  );

  const postMeta = document.createElement("div");
  postMeta.classList.add("post-meta", "flex", "justify-between", "items-start");

  const postInfo = document.createElement("div");
  postInfo.classList.add("post-info", "flex", "gap-1");

  const profileImg = document.createElement("img");
  profileImg.classList.add(
    "circle",
    "w-12",
    "h-12",
    "rounded-full",
    "bg-white",
  );
  profileImg.src = post.author?.avatar?.url;

  const postData = document.createElement("div");
  postData.classList.add("post-data", "flex", "flex-col", "gap-1");

  const postAuthor = document.createElement("span");
  postAuthor.classList.add("poster-name");

  const bold = document.createElement("b");

  const usernameLink = document.createElement("a");
  usernameLink.textContent = post.author?.name;
  usernameLink.href = `profile.html?name=${post.author?.name}`;

  const postedAt = document.createElement("span");
  postedAt.classList.add("post-time", "text-sm");
  postedAt.textContent = `Posted at: ${post.created}`;

  const postMenu = document.createElement("i");
  postMenu.classList.add("fa-solid", "fa-ellipsis-vertical");

  const postMessageDiv = document.createElement("div");
  postMessageDiv.classList.add("post-message", "flex", "flex-col", "gap-1");

  const postMessageClick = document.createElement("a");
  postMessageClick.href = `post.html?id=${post.id}`;

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post-title", "text-md", "font-bold", "break-words");
  postTitle.textContent = post.title;

  const postMessage = document.createElement("span");
  postMessage.classList.add("text-sm", "break-words");
  postMessage.textContent = post.body;

  const postReactions = document.createElement("div");
  postReactions.classList.add(
    "post-reactions",
    "flex",
    "items-center",
    "gap-2",
  );

  const thumbUp = document.createElement("div");
  thumbUp.classList.add("post-reaction");

  const thumbUpIcon = document.createElement("i");
  thumbUpIcon.classList.add("fa-jelly-fill", "fa-regular", "fa-thumbs-up");

  const thumbUpCount = document.createElement("span");
  thumbUpCount.textContent = post._count.reactions;

  const thumbDown = document.createElement("div");
  thumbDown.classList.add("post-reaction");

  const thumbDownIcon = document.createElement("i");
  thumbDownIcon.classList.add("fa-jelly-fill", "fa-regular", "fa-thumbs-down");

  const thumbDownCount = document.createElement("span");
  thumbDownCount.textContent = post._count.reactions;

  const postComments = document.createElement("div");
  postComments.classList.add("post-reaction");

  const postCommentsIcon = document.createElement("i");
  postCommentsIcon.classList.add("fa-solid", "fa-comment");

  const postCommentsCount = document.createElement("span");
  postCommentsCount.textContent = post._count.comments;

  const postSettings = document.createElement("div");
  postSettings.classList.add("post-settings", "hidden");

  const settingsContainer = document.createElement("div");
  settingsContainer.classList.add(
    "settings-container",
    "flex",
    "flex-col",
    "gap-4",
    "mt-4",
    "bg-bcg-secondary",
    "items-center",
  );

  const editPostIcon = document.createElement("i");
  editPostIcon.classList.add(
    "fa-solid",
    "fa-pen-to-square",
    "hover:cursor-pointer",
  );

  const deletePostIcon = document.createElement("i");
  deletePostIcon.classList.add(
    "fa-solid",
    "fa-trash",
    "hover:cursor-pointer",
    "text-red-600",
  );

  container.appendChild(postDiv);
  postDiv.appendChild(postMeta);
  postMeta.appendChild(postInfo);
  if (post.author?.avatar?.url) {
    postInfo.appendChild(profileImg);
  }
  postInfo.appendChild(postData);
  postData.appendChild(postAuthor);
  postAuthor.appendChild(bold);
  bold.appendChild(usernameLink);
  postData.appendChild(postedAt);
  if (post.author?.name === getProfile()?.name) {
    postMeta.appendChild(postMenu);
  }
  postDiv.appendChild(postMessageClick);
  postMessageClick.appendChild(postMessageDiv);
  postMessageDiv.appendChild(postTitle);
  postMessageDiv.appendChild(postMessage);
  postDiv.appendChild(postReactions);
  postReactions.appendChild(thumbUp);
  thumbUp.appendChild(thumbUpIcon);
  thumbUp.appendChild(thumbUpCount);
  postReactions.appendChild(thumbDown);
  thumbDown.appendChild(thumbDownIcon);
  thumbDown.appendChild(thumbDownCount);
  postReactions.appendChild(postComments);
  postComments.appendChild(postCommentsIcon);
  postComments.appendChild(postCommentsCount);
  postMenu.appendChild(postSettings);
  postSettings.appendChild(settingsContainer);
  settingsContainer.appendChild(editPostIcon);
  settingsContainer.appendChild(deletePostIcon);
  postMenu.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-ellipsis-vertical")) {
      postSettings.classList.toggle("hidden");
    }
    if (event.target.classList.contains("fa-pen-to-square")) {
      document.querySelector(".edit-post-modal").classList.remove("hidden");
      populateEditModal(post.title, post.body);
      editPostId = post.id;
    } else if (event.target.classList.contains("fa-trash")) {
      deletePostAction(post.id);
    }
  });
}

export function renderSearchPost(post, containerId) {
  const container = document.getElementById(containerId);
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  const postMeta = document.createElement("div");
  postMeta.classList.add("post-meta");

  const postInfo = document.createElement("div");
  postInfo.classList.add("post-info");

  const profileImg = document.createElement("img");
  profileImg.classList.add("circle");
  profileImg.src = post.author?.avatar?.url;

  const postData = document.createElement("div");
  postData.classList.add("post-data");

  const postAuthor = document.createElement("span");
  postAuthor.classList.add("poster-name");

  const bold = document.createElement("b");

  const usernameLink = document.createElement("a");
  usernameLink.textContent = post.author?.name;
  usernameLink.href = `profile.html?name=${post.author?.name}`;

  const postedAt = document.createElement("span");
  postedAt.classList.add("post-time");
  postedAt.textContent = `Posted at: ${post.created}`;

  const postMenu = document.createElement("i");
  postMenu.classList.add("fa-solid", "fa-ellipsis-vertical");

  const postMessageDiv = document.createElement("div");
  postMessageDiv.classList.add("post-message");

  const postMessageClick = document.createElement("a");
  postMessageClick.href = `post.html?id=${post.id}`;

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post-title");
  postTitle.textContent = post.title;

  const postMessage = document.createElement("span");
  postMessage.textContent = post.body;

  container.appendChild(postDiv);
  postDiv.appendChild(postMeta);
  postMeta.appendChild(postInfo);
  if (post.author?.avatar?.url) {
    postInfo.appendChild(profileImg);
  }
  postInfo.appendChild(postData);
  postData.appendChild(postAuthor);
  postAuthor.appendChild(bold);
  bold.appendChild(usernameLink);
  postData.appendChild(postedAt);
  postDiv.appendChild(postMessageClick);
  postMessageClick.appendChild(postMessageDiv);
  postMessageDiv.appendChild(postTitle);
  postMessageDiv.appendChild(postMessage);
}
