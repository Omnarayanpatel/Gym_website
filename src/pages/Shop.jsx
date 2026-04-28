import Card from '../components/Card';
import { productsData } from '../data/productsData';

export default function Shop() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Shop</p>
        <h1 className="section-title">Fitness products</h1>
        <p className="section-copy" style={{ maxWidth: 760, marginTop: 12 }}>
          The shop includes practical gym essentials and supplements that naturally fit the training journey. Keep the section focused on products members actually expect to buy from a fitness brand.
        </p>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 24 }}>
          {productsData.map((product) => (
            <Card
              key={product.name}
              title={product.name}
              badge={product.price}
              description={product.description}
              image={product.image}
              imageAlt={product.name}
              mediaLabel={product.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
