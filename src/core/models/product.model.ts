export interface IProductDto {
  id: string;
  sku: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

export class Product implements IProductDto {
  constructor(
    public id: string,
    public sku: string,
    public name: string,
    public price: number,
    public stock: number,
    public category: string
  ) {}

  public getFormattedPrice(): string {
    return `$${this.price.toFixed(2)} USD`;
  }

  public isInStock(): boolean {
    return this.stock > 0;
  }
}