import Button from '../../components/Button';
import { trialCards } from '../../data/homeExperienceData';

export default function FreeTrialShowcase() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Free Trials</p>
            <h2 className="section-title">Try before you commit</h2>
          </div>
          <p className="section-copy">
            The first visit should feel easy. These trial cards make the next step obvious without crowding the page.
          </p>
        </div>

        <div className="trial-grid">
          {trialCards.map((trial, index) => (
            <article
              key={trial.title}
              className="trial-card"
              style={{
                animationDelay: `${index * 90}ms`,
                backgroundImage: `linear-gradient(180deg, rgba(5, 5, 5, 0.1), rgba(5, 5, 5, 0.82)), url(${trial.image})`,
              }}
            >
              <div className="trial-card__content">
                <span className="trial-card__kicker">{trial.kicker}</span>
                <h3 className="trial-card__title">{trial.title}</h3>
                <p className="trial-card__copy">{trial.copy}</p>
                <Button as="a" href="/contact" className="btn-primary trial-card__cta">
                  {trial.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
