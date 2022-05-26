import axiosInstance from "./config";

export const getLawyer = (id) => axiosInstance.get(`/abogados/${id}`);
