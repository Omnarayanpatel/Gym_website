import Button from '../../components/Button';
import communityBackground from '../../assets/cta.jfif';

export default function CommunityBanner() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="community-banner"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(7, 7, 7, 0.14), rgba(7, 7, 7, 0.72)), url(${communityBackground})`,
          }}
        >
          <div className="community-banner__content">
            <p className="eyebrow">Community</p>
            <h2 className="section-title">A gym community that feels active and personal.</h2>
            <p className="section-copy">
              Clean membership flow, quick follow-up, and trainers people remember for the right reasons.
            </p>
            <div className="community-actions">
              <Button as="a" href="/contact" className="btn-primary">
                Join Now
              </Button>
              <Button as="a" href="/plans" variant="secondary">
                See Plans
              </Button>
            </div>
          </div>

          <div className="community-banner__panel">
            <span className="community-chip">Trainer support</span>
            <span className="community-chip">Open daily</span>
            <span className="community-chip">Fast WhatsApp replies</span>
            <span className="community-chip">Premium floor</span>
          </div>
        </div>
      </div>
    </section>
  );
}
