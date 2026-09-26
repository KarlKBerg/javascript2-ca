export function getToken() {
  return localStorage.getItem("accessToken");
}

export function removeToken() {
  return localStorage.removeItem("accessToken");
}

export function setToken() {
  return localStorage.setItem("accessToken");
}
