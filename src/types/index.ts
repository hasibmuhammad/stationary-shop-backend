export interface IProductType {
  name: string;
  brand: string;
  price: number;
  category:
    | "Writting"
    | "Office Suppliers"
    | "Art Suppliers"
    | "Educational"
    | "Technology";
  description: string;
  quantity: number;
  inStock: boolean;
}
