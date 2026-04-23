export default function Card({ title, description, children, badge }) {
  return (
    <article className="card" style={{ padding: 24 }}>
      {badge ? <div className="pill" style={{ marginBottom: 14 }}>{badge}</div> : null}
      {title ? <h3 style={{ marginTop: 0, marginBottom: 10 }}>{title}</h3> : null}
      {description ? <p className="muted" style={{ marginTop: 0 }}>{description}</p> : null}
      {children}
    </article>
  );
}
