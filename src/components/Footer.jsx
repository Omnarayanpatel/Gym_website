import { siteInfo } from '../data/siteInfo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="eyebrow">PowerFit Gym</p>
          <p className="footer-brand__text">
            {siteInfo.tagline}. Built for lead generation, automation, and a clean member experience.
          </p>
        </div>

        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/plans">Plans</a>
            <a href="/programs">Programs</a>
            <a href="/trainers">Trainers</a>
            <a href="/shop">Shop</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div>
          <p className="footer-title">Support</p>
          <div className="footer-links">
            <span>Free trial booking</span>
            <span>AI chatbot support</span>
            <span>Open daily 5 AM - 11 PM</span>
            <span>WhatsApp follow-up</span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright 2026 {siteInfo.name}</span>
        <span>{siteInfo.tagline}</span>
      </div>
    </footer>
  );
}
