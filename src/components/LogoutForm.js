import { logoutUser } from "../services/authService.js";

export function logoutUserListener() {
  const logoutBtn = document.querySelector(".logout-btn");
  const mobileLogoutBtn = document.querySelector("#nav-mobile .logout-btn");
  if (!mobileLogoutBtn) return;
  if (!logoutBtn) return;
  logoutBtn.addEventListener("click", (event) => {
    event.preventDefault();
    logoutUser();
  });
  mobileLogoutBtn.addEventListener("click", () => {
    logoutUser();
  });
}
