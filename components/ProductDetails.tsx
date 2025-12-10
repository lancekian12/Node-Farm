import Link from "next/link";
import { Product } from "@/lib/product";

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="container">
      <h1>🌽 Node Farm 🥦</h1>

      <figure className="product">
        <div className={`product__organic ${product.organic ? "" : "not-organic"}`}>
          <h5>Organic</h5>
        </div>

        <Link href="/" className="product__back">
          <span className="emoji-left">👈</span>Back
        </Link>

        <div className="product__hero">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className={`product__emoji product__emoji--${i + 1}`}>
              {product.image}
            </span>
          ))}
        </div>

        <h2 className="product__name">{product.productName}</h2>

        <div className="product__details">
          <p><span className="emoji-left">🌍</span>From {product.from}</p>
          <p><span className="emoji-left">❤️</span>{product.nutrients}</p>
          <p><span className="emoji-left">📦</span> {product.quantity}</p>
          <p><span className="emoji-left">🏷</span> {product.price}€</p>
        </div>

        <a className="product__link" href="#">
          <span className="emoji-left">🛒</span>
          <span>Add to shopping card ({product.price}€)</span>
        </a>

        <p className="product__description">{product.description}</p>
      </figure>
    </div>
  );
}
