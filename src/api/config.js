import axios from "axios";

const URL = process.env.REACT_APP_PATH_API || "https://api-abogados.herokuapp.com/";
const axiosInstance = axios.create({
  baseURL: URL,
});

export default axiosInstance;