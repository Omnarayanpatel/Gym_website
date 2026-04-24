import { plansData } from '../../data/plansData';
import PlanCard from '../plans/PlanCard';

export default function PlansPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Membership</p>
            <h2 className="section-title">Memberships built for different goals</h2>
          </div>
          <p className="section-copy">Pick the plan that matches your pace, your budget, and the level of coaching you want.</p>
        </div>
        <div className="grid plans-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginTop: 24 }}>
          {plansData.map((plan) => (
            <PlanCard key={plan.name} plan={plan} index={plan.featured ? 1 : 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
