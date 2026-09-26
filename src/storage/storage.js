export function getToken() {
  return localStorage.getItem("accessToken");
}

export function removeToken() {
  return localStorage.removeItem("accessToken");
}

export function setToken(token) {
  return localStorage.setItem("accessToken", token);
}

export function getProfile() {
  return JSON.parse(localStorage.getItem("profile"));
}
