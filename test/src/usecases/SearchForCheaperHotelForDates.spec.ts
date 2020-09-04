import { SearchForCheaperHotelForDates, ClientType } from './SearchForCheaperHotelForDates';
import { InMemoryHotelRepository } from '../repositories/implementations/InMemoryHotelRepository';
import { Hotel } from '../entities/Hotel';

const repository = new InMemoryHotelRepository();
describe('SearchForCheaperHotelForDates', function () {
  it('input 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed) -> output Parque das flores', function () {
    const dates = [
      new Date(2020, 2, 16),
      new Date(2020, 2, 17),
      new Date(2020, 2, 18),
    ];
    const client: ClientType = 'Regular';
    expect(new SearchForCheaperHotelForDates(repository).execute(dates, client)).toBe('Parque das flores');
  });


  it('input 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun) -> output Jardim Botânico', function () {
    const dates = [
      new Date(2020, 2, 20),
      new Date(2020, 2, 21),
      new Date(2020, 2, 22),
    ];
    const client: ClientType = 'Regular';
    expect(new SearchForCheaperHotelForDates(repository).execute(dates, client)).toBe('Jardim Botânico');
  });

  it('input 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat) -> output Mar Atlântico', function () {
    const dates = [
      new Date(2020, 2, 26),
      new Date(2020, 2, 27),
      new Date(2020, 2, 28),
    ];
    const client: ClientType = 'Fidelidade';
    expect(new SearchForCheaperHotelForDates(repository).execute(dates, client)).toBe('Mar Atlântico');
  });

  it('input Parque das flores, 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed), client Regular -> output 330', function () {
    const hotel = new Hotel({
      name: 'Parque das flores',
      stars: 3,
      weekPriceRegular: 110,
      weekendPriceRegular: 90,
      weekPriceLoyalty: 80,
      weekendPriceLoyalty: 80,
    });
    const dates = [
      new Date(2020, 2, 16),
      new Date(2020, 2, 17),
      new Date(2020, 2, 18),
    ];
    const client: ClientType = 'Regular';
    expect(new SearchForCheaperHotelForDates(repository).calculateHotelPriceForDates(hotel, dates, client)).toBe(330);
  });
})