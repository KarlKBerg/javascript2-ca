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
