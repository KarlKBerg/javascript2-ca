"use strict";

const BASE_URL = "https://v2.api.noroff.dev/";

async function registerUser() {
  const endpoint = "auth/register";
  const NEW_USER = {
    name: name,
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
