import axios from "axios";


const API_URL = import.meta.env.VITE_HOST_API;;
const VITE_JWT_SECRET = import.meta.env.VITE_JWT_SECRET;

const usersroleoption = (values) => {
    const action = `beforelogin/roles`;
    // const formData = new FormData();
    // for (let value in values) {
    //     formData.append(value, values[value]);
    // }
    // const payload = { user_id: 123 };
    // const token = jwt.sign(payload, VITE_JWT_SECRET);
    // const token = jwt.sign({ foo: 'bar' }, VITE_JWT_SECRET, { algorithm: 'HS256', allowInsecureKeySizes: true })
    // const token = jwt.sign({x:"!22"}, VITE_JWT_SECRET);
    // console.log('token', token);
    // const formData1 = new FormData();
    // formData1.append('access_token', token)
    return axios.post(API_URL + action, {
        headers: {
            "Content-Type": "application/json"
        },
    });
};

const dropdownApiController = {
    usersroleoption
};

export default dropdownApiController;