import Card from '../../components/Card';
import { programsData } from '../../data/programsData';

export default function ProgramsPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Programs</p>
            <h2 className="section-title">Training formats that feel real</h2>
          </div>
          <p className="section-copy">Short, clear program cards make it easy for a visitor to pick a goal and move into the right plan.</p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 24 }}>
          {programsData.map((program) => (
            <Card key={program.title} title={program.title} description={program.description} badge={`Recommended: ${program.recommendedPlan}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
