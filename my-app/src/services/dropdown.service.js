import axios from "axios";

const API_URL = import.meta.env.VITE_HOST_API;;

const usersroleoption = (values) => {
    const action = `/auth/roles`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }
    return axios.post(API_URL + action,formData, {
        headers: {
            "Content-Type": "application/json"
        },
    });
};

const countryOptions = (values) => {
    const action = `/countries/options`;

    return axios.get(API_URL + action, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values?.isToken}`
        },
    });
};

const subcategoryoptions = (values) => {
    const action = `/subcategory/subcategories/${values.id}`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }

    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values.isToken}`
        },
    });
};

const brandOptions = (values) => {
    const action = `/brands/options`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }

    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values.isToken}`
        },
    });
};

const relatableproduct = (values) => {
    const action = `/product/related`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }

    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values.isToken}`
        },
    });
};


const dropdownApiController = {
    usersroleoption,
    countryOptions,
    subcategoryoptions,
    brandOptions,
    relatableproduct
};

export default dropdownApiController;