import axios from "axios";

const API_URL = import.meta.env.VITE_HOST_API;

const register = (values) => {
  const action = `beforelogin/register`;

  const formData = new FormData();
  for (let value in values) {
    if (["roles"].includes(value) && values[value] && typeof values[value] === "object") {
      formData.append(value, JSON.stringify(values[value]));
    } else {
      formData.append(value, values[value]);
    }
  }

  return axios.post(API_URL + action, formData, {
    headers: {
      "Content-Type": "multipart/form-data" 
    },
  });
};

const login = (values) => {
  const action = `beforelogin/login`;
  const formData = new FormData();

  Object.keys(values).forEach((key) => {
    formData.append(key, values[key]);
  });

  return axios.post(API_URL + action, formData, {
    headers: {
      "Content-Type": "application/json"
    },
  });
};

const authApiController = {
  register,
  login
};

export default authApiController;