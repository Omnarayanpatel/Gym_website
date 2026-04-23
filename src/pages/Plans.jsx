import Card from '../components/Card';
import Button from '../components/Button';
import { plansData } from '../data/plansData';

export default function Plans() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Plans</p>
        <h1 className="section-title">Membership plans</h1>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginTop: 24 }}>
          {plansData.map((plan) => (
            <Card key={plan.name} title={plan.name} badge={plan.featured ? 'Popular' : plan.duration}>
              <p style={{ fontSize: '1.6rem', fontWeight: 800, margin: '10px 0' }}>{plan.price}</p>
              <ul style={{ paddingLeft: 18, marginTop: 0, color: 'var(--muted)' }}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button as="a" href="/contact" className="btn-primary" style={{ marginTop: 10 }}>Join Now</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
