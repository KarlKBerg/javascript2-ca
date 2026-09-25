import { displayToastMessage } from "../utils/domHelpers.js";

export const BASE_URL = "https://v2.api.noroff.dev/";
const API_KEY = "163144e0-28b1-43f5-b65e-a87870a9474e";

async function apiClient(endpoint, options = {}) {
  const { body, ...customOptions } = options;
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "application/json",
    "X-Noroff-API-Key": API_KEY,
  };
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  const config = {
    method: body ? "POST" : "GET",
    ...customOptions,
    headers: {
      ...headers,
      ...customOptions.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(BASE_URL + endpoint, config);

  if (!response.ok) {
    const errorData = await response.json();
    if (response.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("profile");
      window.location.href = "index.html";
    }
    throw new Error(errorData.errors?.[0]?.message || "An API error occured");
  }

  if (response.status === 204) {
    return null;
  }
  return await response.json();
}

export const get = (endpoint) => apiClient(endpoint);
export const post = (endpoint, body) => apiClient(endpoint, { body });
export const put = (endpoint, body) =>
  apiClient(endpoint, { method: "PUT", body });
export const del = (endpoint) => apiClient(endpoint, { method: "DELETE" });
