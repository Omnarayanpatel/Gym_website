export default function PlanCard({ plan }) {
  return (
    <article className="card" style={{ padding: 24 }}>
      <div className="pill" style={{ marginBottom: 14 }}>{plan.duration}</div>
      <h3 style={{ marginTop: 0 }}>{plan.name}</h3>
      <p style={{ fontSize: '1.6rem', fontWeight: 800, margin: '10px 0' }}>{plan.price}</p>
      <ul style={{ paddingLeft: 18, marginTop: 0, color: 'var(--muted)' }}>
        {plan.features?.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
}
