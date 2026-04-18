export type Engine = "diesel" | "petrol" | "hybrid" | "electric";
export type VehicleForm =
  | "alcove"
  | "panel_van"
  | "integrated"
  | "semi_integrated";
export type Transmission = "manual" | "automatic";

export interface GetCampersParams {
  page?: number;
  perPage?: number;
  location?: string;
  form?: VehicleForm;
  engine?: Engine;
  transmission?: Transmission;
}

export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: VehicleForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: string[];
  coverImage: string;
  totalReviews: number;
}

export interface DetailedCamper extends Omit<Camper, 'amenities'> {
  gallery: CamperGallery[]; //
  reviews: CamperReview[]; //
  amenities: string[] | any;
}

export interface CamperGallery {
  thumb: string;
  original: string;
}

export interface CamperReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}
