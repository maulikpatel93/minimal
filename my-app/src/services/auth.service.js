import axios from "axios";

const API_URL = import.meta.env.VITE_HOST_API;;

const register = (values) => {
  const action = `api/auth/register`;
  const formData = new FormData();
  for (let value in values) {
    if (["option"].includes(value) && values[value] && typeof values[value] === "object") {
      formData.append(value, JSON.stringify(values[value]));
    } else {
      formData.append(value, values[value]);
    }
  }

  return axios.post(API_URL + action, formData, {
    headers: {
      "Content-Type": "application/json"
    },
  });
};

const login = (values) => {
  const action = `/login`;
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