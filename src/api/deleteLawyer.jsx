import axiosInstance from "./config";

export const deleteLawyer = (id) => axiosInstance.delete(`/abogados/${id}`);
