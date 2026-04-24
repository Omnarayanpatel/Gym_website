export default function TrainerCard({ trainer }) {
  return (
    <article className="trainer-card">
      <div className="trainer-card__image" style={{ backgroundImage: `url(${trainer.image})` }} />
      <div className="trainer-card__top">
        <div className="trainer-card__meta">
          <span className="trainer-card__experience">{trainer.experience}</span>
          <span className="trainer-card__specialty">{trainer.specialization}</span>
        </div>
      </div>

      <h3 className="trainer-card__name">{trainer.name}</h3>
      <p className="trainer-card__bio">{trainer.bio}</p>

      <div className="trainer-card__footer">
        <span>Strength coaching</span>
        <span>Personal support</span>
      </div>
    </article>
  );
}
