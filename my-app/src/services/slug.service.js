import axios from "axios";

const API_URL = import.meta.env.VITE_HOST_API;


const view = (values) => {
    const action = `/getSlug`;
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
    });

    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values?.isToken}`
        },
    });
};

const slugApiController = {
    view
};

export default slugApiController;