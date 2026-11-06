"use strict";
import { pageCheck } from "./components/FeedController.js";
import { loginFormListener } from "./components/LoginForm.js";
import { logoutUserListener } from "./components/LogoutForm.js";
import { registerFormListener } from "./components/RegisterForm.js";
import { createPostListener } from "./components/CreatePostController.js";
import { editPostListener } from "./components/EditPostController.js";
import { myProfile } from "./components/ProfileController.js";
import { searchListener } from "./components/SearchController.js";

registerFormListener();
loginFormListener();
logoutUserListener();
pageCheck();
createPostListener();
editPostListener();
myProfile();
searchListener();

document.getElementById("hamburger-menu").addEventListener("click", () => {
  const menu = document.getElementById("nav-mobile");
  const searchField = document.getElementById("mobile-search");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  searchField.classList.add("hidden");
});
document.getElementById("mobile-search-btn").addEventListener("click", () => {
  const searchField = document.getElementById("mobile-search");
  const menu = document.getElementById("nav-mobile");
  searchField.classList.toggle("hidden");
  menu.classList.add("hidden");
  menu.classList.remove("flex");
});

document.getElementById("profile-btn").addEventListener("click", () => {
  window.location.href = "../profile.html";
});
