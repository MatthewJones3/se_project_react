const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  return res.json();
}

function request(url, options = {}) {
  return fetch(url, options).then(checkResponse);
}

export const getItems = async () => {
  return request(`${baseUrl}/items`);
};

export const addItem = async (item) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};

export const deleteItem = async (id) => {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  });
};
