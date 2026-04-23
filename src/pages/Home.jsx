import Hero from '../sections/home/Hero';
import ProgramsPreview from '../sections/home/ProgramsPreview';
import PlansPreview from '../sections/home/PlansPreview';
import TrainersPreview from '../sections/home/TrainersPreview';
import Testimonials from '../sections/home/Testimonials';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container quick-strip">
          <div className="quick-item">
            <strong style={{ display: 'block', marginBottom: 6 }}>Group Classes</strong>
            <span className="muted">High-energy sessions with trainer guidance.</span>
          </div>
          <div className="quick-item">
            <strong style={{ display: 'block', marginBottom: 6 }}>Weight Loss</strong>
            <span className="muted">Structured fat-loss plan with tracking.</span>
          </div>
          <div className="quick-item">
            <strong style={{ display: 'block', marginBottom: 6 }}>Muscle Gain</strong>
            <span className="muted">Strength-focused training for visible progress.</span>
          </div>
          <div className="quick-item">
            <strong style={{ display: 'block', marginBottom: 6 }}>Free Trial</strong>
            <span className="muted">Easy trial booking with WhatsApp support.</span>
          </div>
        </div>
      </section>
      <ProgramsPreview />
      <PlansPreview />
      <TrainersPreview />
      <Testimonials />
      <section className="section">
        <div className="container card" style={{ padding: 32, textAlign: 'center' }}>
          <p className="eyebrow">Start today</p>
          <h2 className="section-title" style={{ marginBottom: 12 }}>Book your free trial at PowerFit Gym</h2>
          <p className="section-copy" style={{ margin: '0 auto 20px' }}>
            Clean premium design, real membership flow, and a chatbot ready to handle first-time questions.
          </p>
          <Button as="a" href="/contact" className="btn-primary">Book Free Trial</Button>
        </div>
      </section>
    </>
  );
}
