import { HotelRepository } from "../repositories/HotelRepository";
import { Hotel } from "../entities/Hotel";
import isWeekend from 'date-fns/isWeekend'

export type ClientType = 'Regular' | 'Fidelidade';


export class SearchForCheaperHotelForDates{
  constructor(
    private readonly hotelRepository: HotelRepository,
  ){}
  execute(dates: Date[], client: ClientType){
    const allHotels = this.hotelRepository.getAll();
    const hotelsWithPrices = allHotels.map(hotel => ({
      hotel,
      price: this.calculateHotelPriceForDates(hotel, dates, client),
    }));
    const cheaperHotel = hotelsWithPrices.reduce((prev, current) => {
      if(prev.price < current.price){
        return prev;
      }
      if(prev.price === current.price && prev.hotel.stars > current.hotel.stars){
        return prev;
      }
      return current;
    }, hotelsWithPrices[0]);
    return cheaperHotel.hotel.name;
  }
  calculateHotelPriceForDates(hotel: Hotel, dates: Date[], client: ClientType):number{
    let weekPrice = hotel.weekPriceRegular;
    let weekendPrice = hotel.weekendPriceRegular;
    if(client === 'Fidelidade'){
      weekPrice = hotel.weekPriceLoyalty;
      weekendPrice = hotel.weekendPriceLoyalty;
    }
    const price = dates
      .map(date => {
        if(isWeekend(date)){
          return weekendPrice;
        }
        return weekPrice;
      })
      .reduce((a,b) => a+b, 0);
    return price;
  }
}