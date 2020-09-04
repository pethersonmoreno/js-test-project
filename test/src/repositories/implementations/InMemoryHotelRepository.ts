import { Hotel } from "../../entities/Hotel";
import { HotelRepository } from "../HotelRepository";

export class InMemoryHotelRepository implements HotelRepository{
  getAll(): Hotel[] {
    return [
      new Hotel({
        name: 'Parque das flores',
        stars: 3,
        weekPriceRegular: 110,
        weekendPriceRegular: 90,
        weekPriceLoyalty: 80,
        weekendPriceLoyalty: 80,
      }),
      new Hotel({
        name: 'Jardim Botânico',
        stars: 4,
        weekPriceRegular: 160,
        weekendPriceRegular: 60,
        weekPriceLoyalty: 110,
        weekendPriceLoyalty: 50,
      }),
      new Hotel({
        name: 'Mar Atlântico',
        stars: 5,
        weekPriceRegular: 220,
        weekendPriceRegular: 150,
        weekPriceLoyalty: 100,
        weekendPriceLoyalty: 40,
      }),
    ]
  }
}