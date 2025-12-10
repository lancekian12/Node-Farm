import { getProductById } from "@/lib/product";
import ProductDetails from "@/components/ProductDetails";

type Props = {
  params: Promise<{ id: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function ProductPage({ params, searchParams }: Props) {
  const resolvedParams = await params;

  const idFromParams = resolvedParams?.id;

  const idFromSearch = searchParams?.id;

  const id = idFromParams ?? idFromSearch;

  const product = getProductById(id);

  if (!product) {
    console.warn("ProductPage: product not found for id:", id);
    return <h1>Product not found 🚫</h1>;
  }

  return <ProductDetails product={product} />;
}