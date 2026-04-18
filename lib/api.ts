import axios from "axios";
import {
  Camper,
  CampersResponse,
  DetailedCamper,
  Engine,
  GetCampersParams,
  Transmission,
  VehicleForm,
} from "../types/campersType";

interface GetFiltersResponse {
  forms: VehicleForm[];
  engines: Engine[];
  transmissions: Transmission[];
}

const api = axios.create({
  baseURL: "https://campers-api.goit.study",
});

export const getCampers = async (
  params: GetCampersParams,
): Promise<CampersResponse> => {
  const res = await api.get("/campers", {
    params: {
      ...params,
      page: params.page || 1,
      perPage: params.perPage || 4,
    },
  });
  return res.data;
};

export const getCampersById = async (id: string): Promise<DetailedCamper> => {
  const res = await api.get<DetailedCamper>(`/campers/${id}`);
  return res.data;
};

export const getFilters = async (): Promise<GetFiltersResponse> => {
  const res = await api.get("/campers/filters");
  return res.data;
};
