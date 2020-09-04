import { InMemoryHotelRepository } from './InMemoryHotelRepository';

describe('InMemoryHotelRepository', function () {
  it('Should have length 3', function () {
    expect(new InMemoryHotelRepository().getAll()).toHaveLength(3);
  });

  it('Should have hotel - Parque das flores', function () {
    expect(new InMemoryHotelRepository().getAll()).toContainEqual(
      {
        id: 'Parque das flores',
        name: 'Parque das flores',
        stars: 3,
        weekPriceRegular: 110,
        weekendPriceRegular: 90,
        weekPriceLoyalty: 80,
        weekendPriceLoyalty: 80,
      },
    );
  });

  it('Should have hotel - Jardim Botânico', function () {
    expect(new InMemoryHotelRepository().getAll()).toContainEqual(
      {
        id: 'Jardim Botânico',
        name: 'Jardim Botânico',
        stars: 4,
        weekPriceRegular: 160,
        weekendPriceRegular: 60,
        weekPriceLoyalty: 110,
        weekendPriceLoyalty: 50,
      },
    );
  });

  it('Should have hotel - Mar Atlântico', function () {
    expect(new InMemoryHotelRepository().getAll()).toContainEqual(
      {
        id: 'Mar Atlântico',
        name: 'Mar Atlântico',
        stars: 5,
        weekPriceRegular: 220,
        weekendPriceRegular: 150,
        weekPriceLoyalty: 100,
        weekendPriceLoyalty: 40,
      },
    );
  });
})