import axiosInstance from "./config";

export const postImage = (data, header) =>
  axiosInstance.post("/subir-imagen", data, header);
