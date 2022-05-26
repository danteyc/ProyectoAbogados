import axiosInstance from "./config";

export const getSpecialties = () => axiosInstance.get(`/especialidades`);