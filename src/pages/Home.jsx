import Hero from '../sections/home/Hero';
import WorkoutRail from '../sections/home/WorkoutRail';
import PlansPreview from '../sections/home/PlansPreview';
import TrainersPreview from '../sections/home/TrainersPreview';
import Testimonials from '../sections/home/Testimonials';
import FreeTrialShowcase from '../sections/home/FreeTrialShowcase';
import CommunityBanner from '../sections/home/CommunityBanner';
import FaqSection from '../sections/home/FaqSection';
import Button from '../components/Button';
import ctaBackground from '../assets/cta.jfif';
import { centerClasses, homeClasses } from '../data/homeExperienceData';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container quick-strip">
          <div className="quick-item">
            <strong style={{ display: 'block', marginBottom: 6 }}>Group Classes</strong>
            <span className="muted">High-energy sessions with trainer guidance, designed for strength, stamina, and consistency.</span>
          </div>
          <div className="quick-item">
            <strong style={{ display: 'block', marginBottom: 6 }}>Weight Loss</strong>
            <span className="muted">Structured fat-loss plan with tracking, so progress stays visible and easy to follow.</span>
          </div>
          <div className="quick-item">
            <strong style={{ display: 'block', marginBottom: 6 }}>Muscle Gain</strong>
            <span className="muted">Strength-focused training with a clear roadmap for visible muscle and performance gains.</span>
          </div>
          <div className="quick-item">
            <strong style={{ display: 'block', marginBottom: 6 }}>Free Trial</strong>
            <span className="muted">Easy trial booking with WhatsApp support, fast replies, and a simple start for new members.</span>
          </div>
        </div>
      </section>
      <WorkoutRail
        eyebrow="AT-CENTER"
        title="Trainer-led group classes"
        copy="Live coaching, structured formats, and a rhythm that feels motivating from the first session."
        items={centerClasses}
        actionLabel="Book"
      />
      <WorkoutRail
        eyebrow="AT-HOME"
        title="Unlimited home workouts with calorie tracking"
        copy="Keep the habit going when you cannot get to the gym, with short sessions that still feel guided."
        items={homeClasses}
        actionLabel="Start"
      />
      <PlansPreview />
      <TrainersPreview />
      <Testimonials />
      <FreeTrialShowcase />
      <CommunityBanner />
      <FaqSection />
      <section className="section">
        <div
          className="container card cta-panel"
          style={{
            padding: 32,
            textAlign: 'center',
            backgroundImage: `linear-gradient(180deg, rgba(12, 12, 12, 0.86), rgba(8, 8, 8, 0.9)), url(${ctaBackground})`,
          }}
        >
          <p className="eyebrow">Start today</p>
          <h2 className="section-title" style={{ marginBottom: 12 }}>Book your free trial at PowerFit Gym</h2>
          <p className="section-copy" style={{ margin: '0 auto 20px' }}>
            Clean premium design, real membership flow, and a chatbot ready to handle first-time questions.
            The website is built to feel trustworthy, direct, and ready for real customers.
          </p>
          <Button as="a" href="/contact" className="btn-primary">Book Free Trial</Button>
        </div>
      </section>
    </>
  );
}
