import axiosInstance from "./config";

export const getCities = () => axiosInstance.get(`/ciudades`);