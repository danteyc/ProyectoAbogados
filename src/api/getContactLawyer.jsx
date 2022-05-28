import axiosInstance from "./config";

export const getContactLawyer = (id) =>
  axiosInstance.get(`/abogados/contacto/${id}`);