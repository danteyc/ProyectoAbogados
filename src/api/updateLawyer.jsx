import axiosInstance from "./config";

export const updateLawyer = (id, data) =>
  axiosInstance.put(`/abogados/${id}`, data);
