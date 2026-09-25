"use strict";
import { loginFormListener } from "./components/LoginForm.js";
import { logoutUserListener } from "./components/LogoutForm.js";
import { registerFormListener } from "./components/RegisterForm.js";
import { renderFeed } from "./services/postsService.js";

registerFormListener();
loginFormListener();
logoutUserListener();

function pageCheck() {
  const feed = document.getElementById("feed");
  const token = localStorage.getItem("accessToken");
  const loginPage = document.getElementById("login");

  if (feed) {
    if (!token) {
      window.location.href = "index.html";
    } else {
      renderFeed();
    }
  }

  if (loginPage) {
    if (token) {
      window.location.href = "feed.html";
    }
  }
}
pageCheck();
