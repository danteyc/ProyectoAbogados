import axiosInstance from "./config";

export const registro = (data) => axiosInstance.post(`/registro`, data);
