import axiosInstance from "./config";

export const getLawyerCity = (ciudad) =>
  axiosInstance.get(`/abogados/filtro/?ciudad=${ciudad}`);
export const getLawyerSpecialty = (especialidad) =>
  axiosInstance.get(`/abogados/filtro/?especialidad=${especialidad}`);
export const getLawyerCitySpecialty = (ciudad, especialidad) =>
  axiosInstance.get(
    `/abogados/filtro/?ciudad=${ciudad}&especialidad=${especialidad}`
  );
