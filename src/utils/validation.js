import { getProfile } from "../storage/storage.js";

/**
 * Checks if username is empty
 * @param {string} username - The string to be checked.
 * @returns {boolean} - True if username is filled in, false if empty.
 */
export function usernameFilled(username) {
  return username !== "";
}
/**
 * Checks if email is valid for signup
 * @param {string} email - The string to be checked.
 * @returns {boolean} - True if email has @stud.noroff.no, false if not.
 */
export function emailValid(email) {
  return email.includes("@stud.noroff.no");
}
/**
 * Checks if passwords matches.
 * @param {string} psw - The first password which will be sent to server on signup.
 * @param {string} rePsw - The second password that needs to match with the first.
 * @returns {boolean} - True if the two passwords matches, false if not.
 */
export function passwordMatch(psw, rePsw) {
  return psw === rePsw;
}
/**
 * Checks if password length is 8 characters or more.
 * @param {string} psw - Passwordstring to be checked.
 * @returns {boolean} - True if password is 8 characters or more, false if less than 8 characters.
 */
export function passwordLength(psw) {
  return psw.length >= 8;
}
/**
 * Checks if a users username is in the followers array of another user.
 * @param {Array} followers - A followers array that is checked if it includes the username.
 * @returns {boolean} - True if the user is followed by the userprofile it checks.
 */
export function followCheck(followers) {
  const myName = getProfile()?.name;
  return followers.some((follower) => follower.name === myName);
}

export function debounce(func, wait) {
  let timeoutId;

  return function (...args) {
    const context = this;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
