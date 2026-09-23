"use strict";

const BASE_URL = "https://v2.api.noroff.dev/";

async function registerUser(username, email, password) {
  const endpoint = "auth/register";
  const NEW_USER = {
    name: username,
    email: email,
    password: password,
  };

  const POST_DATA = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(NEW_USER),
  };

  disableButton("register-button");

  try {
    const RESPONSE = await fetch(BASE_URL + endpoint, POST_DATA);

    if (!RESPONSE.ok) {
      throw new Error("Registration failed with status: " + RESPONSE.status);
    }

    const RESULT = await RESPONSE.json();

    displayToastMessage("Registration successful!", "success");
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 2000);
  } catch (error) {
    displayToastMessage(`Error: ` + error, "error");
  }
}

function displayToastMessage(message, type) {
  const CONTAINER = document.querySelector(".toast-message");
  const MESSAGE_ELEMENT = document.createElement("span");
  MESSAGE_ELEMENT.textContent = message;
  MESSAGE_ELEMENT.classList.add("message-text");
  if (!CONTAINER) return;
  CONTAINER.innerHTML = "";
  CONTAINER.appendChild(MESSAGE_ELEMENT);
  if (type === "error") {
    CONTAINER.classList.remove("hidden");
    CONTAINER.classList.add("error");
    setTimeout(() => {
      CONTAINER.classList.add("hidden");
    }, 3000);
  } else {
    CONTAINER.classList.remove("hidden");
    CONTAINER.classList.add("success");
    setTimeout(() => {
      CONTAINER.classList.add("hidden");
    }, 3000);
  }
}

function checkRegistrationForm() {
  const EMAIL = document.getElementById("email").value.trim().toLowerCase();
  const USERNAME = document.getElementById("uname").value.trim();
  const PASSWORD = document.getElementById("psw").value;
  const RE_PASSWORD = document.getElementById("re-psw").value;

  if (!usernameFilled(USERNAME)) {
    displayToastMessage("Username can't be empty, try again", "error");
    return;
  }
  if (!emailValid(EMAIL)) {
    displayToastMessage("Email must contain @stud.noroff.no", "error");
    return;
  }
  if (!passwordLength(PASSWORD)) {
    displayToastMessage("Password must be 8 characters or longer", "error");
    return;
  }
  if (!passwordMatch(PASSWORD, RE_PASSWORD)) {
    displayToastMessage("Passwords must match", "error");
    return;
  }
  registerUser(USERNAME, EMAIL, PASSWORD);
}

function usernameFilled(username) {
  return username !== "";
}

function emailValid(email) {
  return email.includes("@stud.noroff.no");
}

function passwordMatch(psw, rePsw) {
  return psw === rePsw;
}

function passwordLength(psw) {
  return psw.length >= 8;
}

function disableButton(id) {
  const BUTTON = document.getElementById(id);

  BUTTON.disabled = true;
}

document.getElementById("register-button").addEventListener("click", () => {
  if (usernameValidation()) {
    console.log("Success");
  } else if (!usernameValidation()) {
    console.log("Error");
  }
});
