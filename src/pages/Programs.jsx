import { programsData } from '../data/programsData';
import ProgramCard from '../sections/programs/ProgramCard';

export default function Programs() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Programs</p>
        <h1 className="section-title">Training programs for every goal</h1>
        <p className="section-copy" style={{ maxWidth: 720, marginTop: 12 }}>
          Pick the training style that matches your starting point, your schedule, and the results you want to see.
        </p>
        <div className="grid programs-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 24 }}>
          {programsData.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
