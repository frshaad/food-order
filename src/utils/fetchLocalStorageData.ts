export const fetchUser = () => {
  const loggedInUserInfo = localStorage.getItem("user");
  if (!loggedInUserInfo) {
    return null;
  }
  return JSON.parse(loggedInUserInfo);
};
