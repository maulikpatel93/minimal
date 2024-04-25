import axios from "axios";
import jwt from "jsonwebtoken";

const API_URL = import.meta.env.VITE_HOST_API;;
const VITE_JWT_SECRET = import.meta.env.VITE_JWT_SECRET;

const usersroleoption = (values) => {
    const action = `beforelogin/roles`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }
    const payload = { user_id: 123 };
    // const token = jwt.sign(payload, VITE_JWT_SECRET);
    const token = jwt.sign({ foo: 'bar' }, VITE_JWT_SECRET, { algorithm: 'HS256', allowInsecureKeySizes: true })
    // const token = jwt.sign({x:"!22"}, VITE_JWT_SECRET);
    console.log('token', token);
    // const formData1 = new FormData();
    // formData1.append('access_token', token)
    return axios.post(API_URL + action,formData1, {
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