import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`}>Test Image</Link>
    </article>
  );
}
