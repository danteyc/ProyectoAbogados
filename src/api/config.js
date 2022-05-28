import axios from "axios";

const URL =
  process.env.REACT_APP_PATH_API || "https://api-abogados.herokuapp.com/";
const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosInstance;
