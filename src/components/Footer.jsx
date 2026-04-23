import { siteInfo } from '../data/siteInfo';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(212,175,55,0.16)', padding: '28px 0', background: 'rgba(5,5,5,0.9)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, color: 'var(--muted)' }}>
        <p style={{ margin: 0 }}>© 2026 {siteInfo.name}. Built for lead generation and automation.</p>
        <p style={{ margin: 0 }}>{siteInfo.tagline}</p>
      </div>
    </footer>
  );
}
