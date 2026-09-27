import { displayToastMessage } from "../utils/domHelpers.js";
import { debounce } from "../utils/validation.js";
import { renderSearchPost } from "./PostCard.js";
import { searchPosts } from "../services/postsService.js";
async function filteredSearch(search) {
  let searchString = search.toLowerCase().trim();
  if (!searchString) return;
  try {
    return await searchPosts(searchString);
  } catch (error) {
    displayToastMessage(error.message, "error");
  }
}

async function search(input) {
  const searchText = input;
  if (searchText === "") {
    document.querySelector(".search-results").classList.add("hidden");
    document.body.classList.remove("modal-open");
  } else {
    document.querySelector(".search-results").classList.remove("hidden");
    document.body.classList.add("modal-open");
    const filteredResult = await filteredSearch(searchText);
    displaySearch(filteredResult);
  }
}
export function searchListener() {
  const searchField = document.getElementById("search");
  if (!searchField) return;
  const debouncedSearch = debounce(search, 700);
  searchField.addEventListener("keyup", (event) => {
    debouncedSearch(event.target.value);
  });
  document.addEventListener("click", (event) => {
    if (
      !event.target.closest(".search-results") &&
      !event.target.closest("#search")
    ) {
      document.querySelector(".search-results").classList.add("hidden");
      document.body.classList.remove("modal-open");
    }
  });
}

function displaySearch(posts) {
  const container = document.getElementById("result-container");
  if (!container) return;
  if (!posts) {
    document.querySelector(".search-results").classList.add("hidden");
    document.body.classList.remove("modal-open");
    return;
  }
  container.innerHTML = "";
  posts.forEach((post) => {
    renderSearchPost(post, "result-container");
  });
}
