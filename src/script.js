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

function hamburgerListener() {
  const menuBtn = document.getElementById("hamburger-menu");
  if (!menuBtn) return;
  menuBtn.addEventListener("click", () => {
    const menu = document.getElementById("nav-mobile");
    const searchField = document.getElementById("mobile-search");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    searchField.classList.add("hidden");
  });
}

function mobileSearchListener() {
  const search = document.getElementById("mobile-search-btn");
  if (!search) return;
  search.addEventListener("click", () => {
    const searchField = document.getElementById("mobile-search");
    const menu = document.getElementById("nav-mobile");
    searchField.classList.toggle("hidden");
    menu.classList.add("hidden");
    menu.classList.remove("flex");
  });
}

function profileBtnListener() {
  const profileBtn = document.getElementById("profile-btn");
  if (!profileBtn) return;
  profileBtn.addEventListener("click", () => {
    window.location.href = "../profile.html";
  });
}
hamburgerListener();
mobileSearchListener();
profileBtnListener();
