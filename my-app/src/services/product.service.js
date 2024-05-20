import axios from "axios";


const API_URL = import.meta.env.VITE_HOST_API;

const store = (values) => {
    const action = `/product/store`;
    const formData = new FormData();
    for (let key in values) {
        if (key === "image" && values[key] && values[key].length > 0) {
            // If the key is "image", handle it as an array of files
            values[key].forEach((file) => {
                formData.append(key + '[]', file); // Append each file to the form data
            });
        } else if (key === "related_products" && Array.isArray(values[key])) {
            // If the key is "related_products" and it's an array, append it to the form data
            values[key].forEach((productId) => {
                formData.append(key + '[]', productId); // Append each related product ID
            });
        } else {
            // For all other keys, just append the value to the form data
            formData.append(key, values[key]);
        }
    }

    return axios.post(API_URL + action, formData, {
        headers: {
            "Authorization": `Bearer ${values?.isToken}`,
            "Content-Type": "multipart/form-data", // This header is important for file uploads
        },
    });
};

const view = (values) => {
    const action = `/product/view`;
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
        if (["priceRange"].includes(key) && values[key] && typeof values[key] === "object") {
            if (parseFloat(values[key]) > 0) {
                formData.append(key, JSON.stringify(values[key]));
            }
        } else {
            formData.append(key, values[key]);
        }
    });

    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values?.isToken}`
        },
    });
};

const search = (values) => {
    const action = `/product/search`;
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

const bannerproduct = (values) => {
    const action = `/products/banner`;

    return axios.post(API_URL + action, {
        headers: {
            "Content-Type": "application/json"
        },
    });
};

const productofyear = (values) => {
    const action = `/products/productofyear`;

    return axios.post(API_URL + action, {
        headers: {
            "Content-Type": "application/json"
        },
    });
};

const bestseller = (values) => {
    const action = `/products/bestsellers`;

    return axios.post(API_URL + action, {
        headers: {
            "Content-Type": "application/json"
        },
    });
};

const newarrival = (values) => {
    const action = `/products/newarrival`;

    return axios.post(API_URL + action, {
        headers: {
            "Content-Type": "application/json"
        },
    });
};

const detail = (values) => {
    const action = `/products/detail/${values.id}`;
    // const formData = new FormData();
    // Object.keys(values).forEach((key) => {
    //     formData.append(key, values[key]);
    // });

    return axios.post(API_URL + action, {
        headers: {
            "Content-Type": "application/json"
        },
    });
};

const update = (values) => {
    const action = `/product/update/${values.id}`;
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
    });

    return axios.put(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values?.isToken}`
        },
    });
};

const productwithfilters = (values) => {
    const action = `/shop/product/filter`;
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
        if(key === "category_id" && Array.isArray(values[key])) {
            formData.append(key, JSON.stringify(values[key]));
        }else if (key === "brand_id" && Array.isArray(values[key])) {
            formData.append(key, JSON.stringify(values[key]));
        }else if (key === "price_range" && Array.isArray(values[key])) {
            formData.append(key, JSON.stringify(values[key]));
        }else{
            formData.append(key, values[key]);
        }
    });
    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${values?.isToken}`,
        },
    });
};

const productrates = (values) => {
    const action = `/products/ratings/store`;
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

const productApiController = {
    store,
    view,
    detail,
    update,
    bannerproduct,
    productofyear,
    bestseller,
    newarrival,
    search,
    productrates,
    productwithfilters
};

export default productApiController;