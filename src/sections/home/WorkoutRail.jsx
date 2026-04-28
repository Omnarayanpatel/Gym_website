import Button from '../../components/Button';

function RailCards({ items, actionLabel }) {
  return items.map((item, index) => (
    <article
      key={`${item.title}-${index}`}
      className="cult-card"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="cult-card__image" style={{ backgroundImage: `url(${item.image})` }}>
        <span className="cult-card__badge">{item.badge || item.meta}</span>
      </div>
      <div className="cult-card__body">
        <p className="cult-card__coach">{item.coach}</p>
        <h3 className="cult-card__title">{item.title}</h3>
        <p className="cult-card__meta">{item.meta}</p>
        <Button as="a" href={item.href || '/contact'} variant="secondary" className="cult-card__cta">
          {item.cta || actionLabel}
        </Button>
      </div>
    </article>
  ));
}

export default function WorkoutRail({ eyebrow, title, copy, items, actionLabel = 'Explore' }) {
  return (
    <section className="section cult-rail-section">
      <div className="container">
        <div className="section-head cult-rail__head">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
          </div>
          <p className="section-copy">{copy}</p>
        </div>

        <div className="cult-rail__frame">
          <div className="cult-rail__track" aria-label={title}>
            <div className="cult-rail__lane">
              <RailCards items={items} actionLabel={actionLabel} />
            </div>
            <div className="cult-rail__lane" aria-hidden="true">
              <RailCards items={items} actionLabel={actionLabel} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
