import products from "@/data/data.json";

export type Product = {
  id: number | string;
  productName: string;
  image: string;
  from: string;
  nutrients: string;
  quantity: string;
  price: string;
  organic: boolean;
  description: string;
};

export function getProducts(): Product[] {
  return products as Product[];
}

export function getProductById(id?: string | string[] | number): Product | undefined {
  if (id === undefined) return undefined;

  // pick the first if id is an array
  const idStr = Array.isArray(id) ? id[0] : String(id);

  // try number compare first (if your data uses numbers)
  const idNum = Number(idStr);
  const byNumber = (p: Product) => Number(p.id) === idNum;

  // fallback to string compare (if your data uses strings)
  const byString = (p: Product) => String(p.id) === idStr;

  return products.find(p => byNumber(p) || byString(p));
}
