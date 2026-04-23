import Button from '../../components/Button';
import { siteInfo } from '../../data/siteInfo';

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: 56 }}>
      <div className="container hero-grid">
        <div className="card hero-panel" style={{ padding: 28 }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="eyebrow-inline" style={{ marginBottom: 18 }}>
              Premium fitness club
            </div>
            <h1 className="section-title" style={{ maxWidth: 560, marginBottom: 16 }}>
              Train at a gym that feels modern, premium, and personal.
            </h1>
            <p className="section-copy" style={{ fontSize: '1.05rem' }}>
              {siteInfo.name} offers strength training, fat loss programs, flexible memberships, and a clean experience that feels like a real fitness brand.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
              <Button as="a" href="/contact" className="btn-primary">Start Free Trial</Button>
              <Button as="a" href="/plans" variant="secondary">Explore Memberships</Button>
            </div>
            <div className="stat-grid" style={{ marginTop: 28 }}>
              <div className="stat-card">
                <strong style={{ display: 'block', fontSize: '1.2rem' }}>4.8/5</strong>
                <span className="muted">Member rating</span>
              </div>
              <div className="stat-card">
                <strong style={{ display: 'block', fontSize: '1.2rem' }}>12+</strong>
                <span className="muted">Trainers</span>
              </div>
              <div className="stat-card">
                <strong style={{ display: 'block', fontSize: '1.2rem' }}>7 AM - 11 PM</strong>
                <span className="muted">Open daily</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-overlay">
            <div className="card" style={{ padding: 18, width: 'fit-content', background: 'rgba(5,5,5,0.72)' }}>
              <div className="eyebrow-inline">Today at PowerFit</div>
              <p style={{ margin: '10px 0 0' }}>Strength Floor / HIIT / Yoga Flow</p>
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              <div className="card" style={{ padding: 18, background: 'rgba(5,5,5,0.72)' }}>
                <strong>Membership starting at Rs 999</strong>
                <p className="muted" style={{ margin: '6px 0 0' }}>Simple plans, real value, easy join flow.</p>
              </div>
              <div className="card" style={{ padding: 18, background: 'rgba(5,5,5,0.72)' }}>
                <strong>Book a free trial today</strong>
                <p className="muted" style={{ margin: '6px 0 0' }}>WhatsApp, call, or submit lead form.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
