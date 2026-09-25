import { logoutUser } from "../services/authService.js";

export function logoutUserListener() {
  const logoutBtn = document.getElementById("logout-btn");
  if (!logoutBtn) return;
  logoutBtn.addEventListener("click", (event) => {
    event.preventDefault();
    logoutUser();
  });
}
