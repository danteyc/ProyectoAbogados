import axiosInstance from "./config";

export const postLawyer = (data) => axiosInstance.post(`/abogados`, data);