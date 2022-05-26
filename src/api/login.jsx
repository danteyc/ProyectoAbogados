import axiosInstance from "./config";

export const login = (data) => axiosInstance.post(`/login`, data);
