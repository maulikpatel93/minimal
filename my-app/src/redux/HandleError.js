import Unauthorized from "./Unauthorized";
import { setMessage } from "./slices/message";

const HandleError = (thunkAPI, error, type) => {
  return thunkAPI.rejectWithValue(error);
};

export default HandleError;
