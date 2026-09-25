export function renderPost(post) {
  const container = document.querySelector(".posts-container");
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
  bold.textContent = post.author?.name;

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

  const postReactions = document.createElement("div");
  postReactions.classList.add("post-reactions");

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
  settingsContainer.classList.add("settings-container");

  const editPostIcon = document.createElement("i");
  editPostIcon.classList.add("fa-solid", "fa-pen-to-square");

  const deletePostIcon = document.createElement("i");
  deletePostIcon.classList.add("fa-solid", "fa-trash");

  container.appendChild(postDiv);
  postDiv.appendChild(postMeta);
  postMeta.appendChild(postInfo);
  postInfo.appendChild(profileImg);
  postInfo.appendChild(postData);
  postData.appendChild(postAuthor);
  postAuthor.appendChild(bold);
  postData.appendChild(postedAt);
  postMeta.appendChild(postMenu);
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
      editPost();
    } else if (event.target.classList.contains("fa-trash")) {
      deletePost();
    }
  });
}

export function editPost(id) {}
export function deletePost(id) {}
