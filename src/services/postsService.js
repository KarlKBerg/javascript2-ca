import { get } from "./apiClient.js";

export async function renderFeed() {
  const endpoint = "social/posts?_author=true";
  try {
    const response = await get(endpoint);
    const posts = response.data;
    const container = document.querySelector(".posts-container");
    if (!container) return;
    container.innerHTML = "";
    posts.forEach((feedPost) => {
      renderPost(feedPost);
    });
  } catch (error) {
    throw error;
  }
}

function renderPost(post) {
  const container = document.querySelector(".posts-container");
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  const postMeta = document.createElement("div");
  postMeta.classList.add("post-meta");

  const postInfo = document.createElement("div");
  postInfo.classList.add("post-info");

  const profileImg = document.createElement("img");
  profileImg.classList.add("circle");
  profileImg.src = post.author.avatar.url;

  const postData = document.createElement("div");
  postData.classList.add("post-data");

  const postAuthor = document.createElement("span");
  postAuthor.classList.add("poster-name");

  const bold = document.createElement("b");
  bold.textContent = post.author.name;

  const postedAt = document.createElement("span");
  postedAt.classList.add("post-time");
  postedAt.textContent = `Posted at: ${post.created}`;

  const postMenu = document.createElement("i");
  postMenu.classList.add("fa-solid", "fa-ellipsis-vertical");

  const postMessageDiv = document.createElement("div");
  postMessageDiv.classList.add("post-message");

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post-title");
  postTitle.textContent = post.title;

  const postMessage = document.createElement("span");
  postMessage.textContent = post.body;

  const postReactions = document.createElement("div");
  postReactions.classList.add("post-reactions");

  const thumbUp = document.createElement("div");
  thumbUp.classList.add("post-reaction");
  thumbUp.id = "thumbs-up";

  const thumbUpIcon = document.createElement("i");
  thumbUpIcon.classList.add("fa-jelly-fill", "fa-regular", "fa-thumbs-up");

  const thumbUpCount = document.createElement("span");
  thumbUpCount.textContent = post._count.reactions;

  const thumbDown = document.createElement("div");
  thumbDown.classList.add("post-reaction");
  thumbDown.id = "thumbs-down";

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

  container.appendChild(postDiv);
  postDiv.appendChild(postMeta);
  postMeta.appendChild(postInfo);
  postInfo.appendChild(profileImg);
  postInfo.appendChild(postData);
  postData.appendChild(postAuthor);
  postAuthor.appendChild(bold);
  postData.appendChild(postedAt);
  postMeta.appendChild(postMenu);
  postDiv.appendChild(postMessageDiv);
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
  postMenu.addEventListener("click", (event) => {
    console.log("clicked");
  });
}
