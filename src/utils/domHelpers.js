export function disableButton(id) {
  const button = document.getElementById(id);
  if (!button) return;
  button.disabled = true;
}
export function enableButton(id) {
  const button = document.getElementById(id);
  if (!button) return;
  button.disabled = false;
}

export function displayToastMessage(message, type) {
  const container = document.querySelector(".toast-message");
  if (!container) return;
  const messageElement = document.createElement("span");
  messageElement.textContent = message;
  messageElement.classList.add("message-text");
  container.innerHTML = "";
  container.appendChild(messageElement);
  container.classList.remove("hidden");
  container.classList.add(type);
  setTimeout(() => {
    container.classList.add("hidden");
    container.classList.remove(type);
  }, 3000);
}
