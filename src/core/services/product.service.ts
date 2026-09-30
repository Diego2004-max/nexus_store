import { Product, IProductDto } from '../models/product.model';

export class ProductService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.nexusstore.com';
  }

  public async getProductBySku(sku: string): Promise<Product> {
    // ISR: revalidate: 60 indica que la página se regenera en segundo plano cada 60 segundos
    const response = await fetch(`${this.baseUrl}/products/${sku}`, {
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error(`Failed to retrieve product with SKU: ${sku}`);
    }

    const data: IProductDto = await response.json();
    return new Product(data.id, data.sku, data.name, data.price, data.stock, data.category);
  }
}