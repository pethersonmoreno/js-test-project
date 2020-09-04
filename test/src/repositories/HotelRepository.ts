import { Hotel } from "../entities/Hotel";

export interface HotelRepository{
  getAll():Hotel[];
}