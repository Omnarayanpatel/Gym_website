import Button from '../../components/Button';

export default function PlanCard({ plan, index = 0 }) {
  const featured = Boolean(plan.featured);

  return (
    <article className={`plan-card${featured ? ' is-featured' : ''}`} style={{ animationDelay: `${index * 90}ms` }}>
      <div className="plan-card__shine" />
      <div className="plan-card__border" />
      <div className="plan-card__inner">
        <div className="plan-card__top">
          <span className="plan-card__duration">{featured ? 'Most Popular' : plan.duration}</span>
          {featured ? <span className="plan-card__spotlight">Best Value</span> : null}
        </div>

        <h3 className="plan-card__title">{plan.name}</h3>
        <p className="plan-card__price">{plan.price}</p>

        <ul className="plan-card__list">
          {plan.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <Button as="a" href="/contact" className="btn-primary plan-card__cta">
          Join Now
        </Button>
      </div>
    </article>
  );
}
