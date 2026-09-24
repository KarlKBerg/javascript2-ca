import { loginUser } from "../services/authService.js";
import { displayToastMessage } from "../utils/domHelpers.js";

export function loginFormListener() {
  const form = document.getElementById("login-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const credentials = {
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const profile = await loginUser(credentials);
      window.location.href = "/feed.html";
      displayToastMessage("Login successfull!", "success");
    } catch (error) {
      displayToastMessage(`Login failed: ${error.message}, "error`);
    }
  });
}
