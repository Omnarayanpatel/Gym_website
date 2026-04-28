export default function ProgramCard({ program }) {
  return (
    <article className="card program-card">
      <div className="program-card__image" style={{ backgroundImage: `url(${program.image})` }} />
      <div className="program-card__topline" />
      <div className="program-card__content">
        <div className="program-card__meta">
          <span className="program-card__label">Recommended</span>
          <span className="program-card__plan">{program.recommendedPlan}</span>
        </div>
        <h3 className="program-card__title">{program.title}</h3>
        <p className="program-card__copy">{program.description}</p>
        <p className="program-card__details">{program.details}</p>
        <div className="program-card__chips">
          {(program.outcomes || []).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="program-card__footer">
          <span>Goal-based training</span>
          <span className="program-card__arrow">-&gt;</span>
        </div>
      </div>
    </article>
  );
}
