import Card from '../components/Card';
import { programsData } from '../data/programsData';

export default function Programs() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Programs</p>
        <h1 className="section-title">Training programs</h1>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 24 }}>
          {programsData.map((program) => (
            <Card key={program.title} title={program.title} description={program.description} badge={`Recommended: ${program.recommendedPlan}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
