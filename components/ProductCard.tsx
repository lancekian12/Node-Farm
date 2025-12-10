import Link from "next/link";
import { Product } from "@/lib/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <figure className="card">
      <div className="card__emoji">{product.image}{product.image}</div>

      <div className="card__title-box">
        <h2 className="card__title">{product.productName}</h2>
      </div>

      <div className="card__details">
        <div className={`card__detail-box ${product.organic ? "" : "not-organic"}`}>
          <h6 className="card__detail card__detail--organic">Organic!</h6>
        </div>

        <div className="card__detail-box">
          <h6 className="card__detail">{product.quantity} per 📦</h6>
        </div>

        <div className="card__detail-box">
          <h6 className="card__detail card__detail--price">₱{product.price}</h6>
        </div>
      </div>

      <Link className="card__link" href={`/product/${product.id}`}>
        <span>Detail <i className="emoji-right">👉</i></span>
      </Link>
    </figure>
  );
}
