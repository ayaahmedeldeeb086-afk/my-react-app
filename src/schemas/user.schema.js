export function validateUser(user) {
 return Boolean (
  user&&
  typeof user.name === "string" &&
  user.name.trim() !== "" &&
  typeof user.email === "string" &&
  user.email.includes("@")
 )
}