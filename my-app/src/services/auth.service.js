import axios from "axios";
// import jwt from "jsonwebtoken";

const API_URL = import.meta.env.VITE_HOST_API;
const VITE_JWT_SECRET = import.meta.env.VITE_JWT_SECRET;

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

  const payload = {
    formData: Object.fromEntries(formData), // Convert FormData to object
  };
  // Generate JWT token
  const token = jwt.sign(payload, VITE_JWT_SECRET);

  return axios.post(API_URL + action, formData, {
    headers: {
      "Content-Type": "application/json"
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