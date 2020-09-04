import { Hotel } from './Hotel';

describe('Hotel', function () {
  it('should create hotel with valid values', function () {
    expect(new Hotel({
      name: 'Parque das flores',
      stars: 3,
      weekPriceRegular: 110,
      weekendPriceRegular: 90,
      weekPriceLoyalty: 80,
      weekendPriceLoyalty: 80,
    })).toEqual({
      id: 'Parque das flores',
      name: 'Parque das flores',
      stars: 3,
      weekPriceRegular: 110,
      weekendPriceRegular: 90,
      weekPriceLoyalty: 80,
      weekendPriceLoyalty: 80,
    });
  })
})