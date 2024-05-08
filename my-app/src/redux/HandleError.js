import Unauthorized from "./Unauthorized";
import { setMessage } from "./slices/message";

const HandleError = (thunkAPI, error, type) => {
  console.log('thunkAPI: ', thunkAPI);
  console.log('error: ', error);
  if (error.response && error.response.status === 422) {
    const messages = (error.response && error.response.data && error.response.data) || error.message || error.toString();
    return thunkAPI.rejectWithValue({ status: error?.response?.status, message: messages,errors:error?error : [] });
  }
  const messages = (error.response && error.response.data && error.response.data) || error.message || error.toString();
  return thunkAPI.rejectWithValue({ status: error?.response?.status, message: messages });
};

export default HandleError;
