import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/product";

export default function HomePage() {
  const products = getProducts();

  return (
    <div className="container">
      <h1>🌽 Kian Farm 🥦</h1>
      <div className="cards-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
