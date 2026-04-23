import { plansData } from '../../data/plansData';
import Card from '../../components/Card';
import Button from '../../components/Button';

export default function PlansPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Membership</p>
            <h2 className="section-title">Simple plans, premium feel</h2>
          </div>
          <p className="section-copy">The membership section should look like a serious buying decision, not a generic pricing table.</p>
        </div>
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
