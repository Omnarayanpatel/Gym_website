export default function ProductCard({ product }) {
  return (
    <article className="card" style={{ padding: 24 }}>
      <div className="pill" style={{ marginBottom: 14 }}>{product.price}</div>
      <h3 style={{ marginTop: 0 }}>{product.name}</h3>
    </article>
  );
}
