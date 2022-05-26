import axiosInstance from "./config";

export const getLawyers = () => axiosInstance.get(`/abogados`);