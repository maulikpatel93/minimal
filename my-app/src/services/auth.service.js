import axios from "axios";
import config from "../config.js";

const API_URL = config.API_URL;

const register = (values) => {
  const action = `/register`;
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