export const setUserSession = (token, user, username) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", JSON.stringify(user));
  sessionStorage.setItem("username", JSON.stringify(username));
};

export const getUser = () => {
  try {
    const userStr = sessionStorage.getItem("user");
    //console.log(sessionStorage);
    if (userStr) {
      return JSON.parse(userStr);
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("username");
};
