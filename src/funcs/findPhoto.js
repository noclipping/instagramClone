const fs = require("fs");
export default function findPhoto(username) {
  const users = [
    "aresous",
    "dali",
    "default",
    "karl",
    "orwell",
    "raphael",
    "steve",
  ];
  if (users.includes(username)) {
    return `/images/avatars/${username}.jpg`;
  } else {
    return "/images/avatars/default.jpg";
  }
}
