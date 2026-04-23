import Card from '../components/Card';
import { trainersData } from '../data/trainersData';

export default function Trainers() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Trainers</p>
        <h1 className="section-title">Your coaching team</h1>
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
