import axios from "axios";
import config from "../config.js";

const API_URL = config.API_URL;

const view = (values) => {
    const action = `/categories/lists`;
    return axios.post(API_URL + action, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
const categorydiscount = (values) => {
    const action = `/category/discount/banner`;
    return axios.post(API_URL + action, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const brandlists = (values) => {
    const action = `/shop/brand/list`;
    return axios.post(API_URL + action, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const categoryApiController = {
    view,
    categorydiscount,
    brandlists
};

export default categoryApiController;