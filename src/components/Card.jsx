export default function Card({ title, description, children, badge, image, imageAlt, mediaLabel }) {
  return (
    <article className="card" style={{ padding: 24 }}>
      {image ? (
        <div
          className="card-media"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(5, 5, 5, 0.06), rgba(5, 5, 5, 0.42)), url(${image})` }}
          role="img"
          aria-label={imageAlt || title}
        />
      ) : mediaLabel ? (
        <div className="card-media card-media--placeholder" aria-hidden="true">
          <span>{mediaLabel}</span>
        </div>
      ) : null}
      {badge ? <div className="pill" style={{ marginBottom: 14 }}>{badge}</div> : null}
      {title ? <h3 style={{ marginTop: 0, marginBottom: 10 }}>{title}</h3> : null}
      {description ? <p className="muted" style={{ marginTop: 0 }}>{description}</p> : null}
      {children}
    </article>
  );
}
