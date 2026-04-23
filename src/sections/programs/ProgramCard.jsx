export default function ProgramCard({ program }) {
  return (
    <article className="card" style={{ padding: 24 }}>
      <div className="pill" style={{ marginBottom: 14 }}>{program.recommendedPlan}</div>
      <h3 style={{ marginTop: 0 }}>{program.title}</h3>
      <p className="muted" style={{ marginBottom: 0 }}>{program.description}</p>
    </article>
  );
}
