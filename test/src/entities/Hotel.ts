export class Hotel {
  public readonly id:string;
  public readonly name:string;
  public readonly stars:number;
  public readonly weekPriceRegular:number;
  public readonly weekendPriceRegular:number;
  public readonly weekPriceLoyalty:number;
  public readonly weekendPriceLoyalty:number;
  constructor(props: Omit<Hotel, 'id'>){
    this.id = props.name;
    this.name = props.name;
    this.stars = props.stars;
    this.weekPriceRegular = props.weekPriceRegular;
    this.weekendPriceRegular = props.weekendPriceRegular;
    this.weekPriceLoyalty = props.weekPriceLoyalty;
    this.weekendPriceLoyalty = props.weekendPriceLoyalty;
  }
}