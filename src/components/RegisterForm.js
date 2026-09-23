import {
  disableButton,
  enableButton,
  displayToastMessage,
} from "../utils/domHelpers.js";
import {
  usernameFilled,
  emailValid,
  passwordMatch,
  passwordLength,
} from "../utils/validation.js";
import { registerUser } from "../services/authService.js";

export async function checkRegistrationForm() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const username = document.getElementById("uname").value.trim();
  const password = document.getElementById("password").value;
  const rePassword = document.getElementById("re-password").value;

  if (!usernameFilled(username)) {
    displayToastMessage("Username can't be empty, try again", "error");
    return;
  }
  if (!emailValid(email)) {
    displayToastMessage("Email must contain @stud.noroff.no", "error");
    return;
  }
  if (!passwordLength(password)) {
    displayToastMessage("Password must be 8 characters or longer", "error");
    return;
  }
  if (!passwordMatch(password, rePassword)) {
    displayToastMessage("Passwords must match", "error");
    return;
  }
  disableButton("register-button");
  try {
    await registerUser(username, email, password);
    displayToastMessage("Registration successful!", "success");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  } catch (error) {
    displayToastMessage(`Error: ` + error, "error");
    enableButton("register-button");
  }
}

export function registerFormListener() {
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      checkRegistrationForm();
    });
  }
}
