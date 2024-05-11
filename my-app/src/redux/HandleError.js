import Unauthorized from "./Unauthorized";
import { setMessage } from "./slices/message";

const HandleError = (thunkAPI, error, type) => {
  // console.log('thunkAPI: ', thunkAPI);
  // console.log('error: ', error);
  return thunkAPI.rejectWithValue(error);
};

export default HandleError;
