export function getToken() {
  return localStorage.getItem("accessToken");
}

export function removeToken() {
  return localStorage.removeItemItem("accessToken");
}

export function setToken() {
  return localStorage.setItem("accessToken");
}
