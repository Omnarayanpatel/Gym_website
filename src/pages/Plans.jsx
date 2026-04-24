import { plansData } from '../data/plansData';
import PlanCard from '../sections/plans/PlanCard';
import plansVisual from '../assets/gym_program_2.jfif';

export default function Plans() {
  return (
    <section className="section plans-page">
      <div className="container">
        <div className="plans-hero card">
          <div className="plans-hero__content">
            <p className="eyebrow">Plans</p>
            <h1 className="section-title plans-page__title">Membership plans</h1>
            <p className="section-copy">
              Choose a plan based on your goal, budget, and training level. Each option is written clearly so people can compare quickly and join without confusion.
            </p>
            <div className="plans-badges">
              <span className="plans-badge">Gold standard training</span>
              <span className="plans-badge">Flexible memberships</span>
              <span className="plans-badge">Open 5 AM - 11 PM</span>
            </div>
          </div>

          <div className="plans-hero__visual" style={{ backgroundImage: `linear-gradient(180deg, rgba(5, 5, 5, 0.08), rgba(5, 5, 5, 0.78)), url(${plansVisual})` }}>
            <div className="plans-hero__overlay">
              <span className="plans-hero__kicker">PowerFit Membership</span>
              <strong>Pick the plan that matches your training pace.</strong>
            </div>
          </div>
        </div>

        <div className="grid plans-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: 28 }}>
          {plansData.map((plan) => (
            <PlanCard key={plan.name} plan={plan} index={plan.featured ? 1 : 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
