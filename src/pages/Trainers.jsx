import { trainersData } from '../data/trainersData';
import TrainerCard from '../sections/trainers/TrainerCard';

export default function Trainers() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Trainers</p>
        <h1 className="section-title">Your coaching team</h1>
        <p className="section-copy" style={{ maxWidth: 720, marginTop: 12 }}>
          A good gym feels personal, and that starts with the coaching staff. These are the people who will guide members every day.
        </p>
        <p className="section-copy" style={{ maxWidth: 760, marginTop: 10 }}>
          Each coach brings a different strength to the floor, from fat loss and beginner support to mobility, strength building, and muscle gain. The goal is to help every member find the right kind of guidance from day one.
        </p>
        <div className="grid trainers-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 24 }}>
          {trainersData.map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}
