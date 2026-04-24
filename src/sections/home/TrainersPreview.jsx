import { trainersData } from '../../data/trainersData';
import TrainerCard from '../trainers/TrainerCard';

export default function TrainersPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Coaches</p>
            <h2 className="section-title">Meet the coaching team</h2>
          </div>
          <p className="section-copy">The right coach makes the first month easier, more personal, and a lot more consistent.</p>
        </div>
        <div className="grid trainers-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 24 }}>
          {trainersData.map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}
