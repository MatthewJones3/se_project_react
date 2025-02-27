export const signup = (userData) => {
  return fetch("http://localhost:3001/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((res) => res.json());
};

export const signin = (credentials) => {
  return fetch("http://localhost:3001/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((res) => res.json());
};

export const getUserData = (token) => {
  return fetch("http://localhost:3001/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const editUserProfile = (updatedUserData) => {
  return fetch("http://localhost:3001/users/me", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(updatedUserData),
  }).then((res) => res.json());
};
