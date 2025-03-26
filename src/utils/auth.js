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
  if (!token) {
    throw new Error("No token found");
  }

  return fetch("http://localhost:3001/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Unauthorized: Invalid or expired token");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      throw error;
    });
};

export const editUserProfile = (updatedUserData) => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    throw new Error("No token found");
  }

  return fetch("http://localhost:3001/users/me", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedUserData),
  }).then((res) => res.json());
};
