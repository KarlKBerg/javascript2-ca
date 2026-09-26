export function getToken() {
  return localStorage.getItem("accessToken");
}

export function removeToken() {
  return localStorage.removeItemItem("accessToken");
}
