import Card from '../components/Card';
import { productsData } from '../data/productsData';

export default function Shop() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Shop</p>
        <h1 className="section-title">Fitness products</h1>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 24 }}>
          {productsData.map((product) => (
            <Card key={product.name} title={product.name} badge={product.price} />
          ))}
        </div>
      </div>
    </section>
  );
}
