import { getProfile } from "../storage/storage.js";

export function usernameFilled(username) {
  return username !== "";
}

export function emailValid(email) {
  return email.includes("@stud.noroff.no");
}

export function passwordMatch(psw, rePsw) {
  return psw === rePsw;
}

export function passwordLength(psw) {
  return psw.length >= 8;
}

export function followCheck(followers) {
  const myName = getProfile()?.name;
  return followers.some((follower) => follower.name === myName);
}
