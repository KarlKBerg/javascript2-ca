"use strict";
import { pageCheck } from "./components/FeedController.js";
import { loginFormListener } from "./components/LoginForm.js";
import { logoutUserListener } from "./components/LogoutForm.js";
import { registerFormListener } from "./components/RegisterForm.js";

registerFormListener();
loginFormListener();
logoutUserListener();
pageCheck();
