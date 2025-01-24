export interface ProductImage {
  id: number;
  url: string;
  jewelId: string;
}
export interface Product {
  id?:string;
  name: string;
  price: number;
  type: string;
  gender: string;
  material: string;
  description: string;
  slug: string;
  inStock: number;
  // JewelImage?: ProductImage[];
}
export interface ProductDB {
  id?:string;
  name: string;
  price: number;
  type: string;
  gender: string;
  material: string;
  description: string;
  slug: string;
  inStock: number;
  JewelImage?: ProductImage[];
}

