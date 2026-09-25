import { displayToastMessage } from "../utils/domHelpers.js";

export const BASE_URL = "https://v2.api.noroff.dev/";

async function apiClient(endpoint, options = {}) {
  const { body, ...customOptions } = options;

  const headers = {
    "Content-Type": "application/json",
  };
  const apiKey = localStorage.getItem("apiKey");
  const accessToken = localStorage.getItem("accessToken");

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

  try {
    const response = await fetch(BASE_URL + endpoint, config);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors?.[0]?.message || "An API error occured");
      displayToastMessage(
        errorData.errors?.[0]?.message || "An API error occured",
        "error",
      );
    }

    if (response.status === 204) {
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error("API Client error: ", error);
    displayToastMessage("API Client error:", "error");
    throw error;
  }
}

export const get = (endpoint) => apiClient(endpoint);
export const post = (endpoint, body) => apiClient(endpoint, { body });
export const put = (endpoint, body) =>
  apiClient(endpoint, { method: "PUT", body });
export const del = (endpoint) => apiClient(endpoint, { method: "DELETE" });
