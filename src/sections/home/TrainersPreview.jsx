import Card from '../../components/Card';
import { trainersData } from '../../data/trainersData';

export default function TrainersPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Coaches</p>
            <h2 className="section-title">Trainer-led, not machine-made</h2>
          </div>
          <p className="section-copy">Users trust the gym more when the coaching team looks experienced, visible, and approachable.</p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 24 }}>
          {trainersData.map((trainer) => (
            <Card
              key={trainer.name}
              title={trainer.name}
              badge={trainer.experience}
              description={trainer.specialization}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
