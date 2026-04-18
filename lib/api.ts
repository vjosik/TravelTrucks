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

export interface Review {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}
export interface BookingData {
  name: string;
  email: string;
  
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

export const getCamperReviews = async (id: string): Promise<Review[]> => {
  const res = await api.get<Review[]>(`/campers/${id}/reviews`);
  return res.data;
};


export const createBooking = async (id: string, data: BookingData) => {
  const res = await api.post(`/campers/${id}/booking-requests`, data);
  return res.data;
};