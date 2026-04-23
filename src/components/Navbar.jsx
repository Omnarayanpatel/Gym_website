import { NavLink } from 'react-router-dom';
import { siteInfo } from '../data/siteInfo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/plans', label: 'Plans' },
  { to: '/trainers', label: 'Trainers' },
  { to: '/programs', label: 'Programs' },
  { to: '/shop', label: 'Shop' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, backdropFilter: 'blur(18px)', background: 'rgba(5, 5, 5, 0.72)', borderBottom: '1px solid rgba(212,175,55,0.16)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', gap: 16 }}>
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, letterSpacing: '0.02em' }}>
          <span style={{ width: 36, height: 36, borderRadius: 12, display: 'inline-grid', placeItems: 'center', background: 'linear-gradient(135deg, #d4af37, #f5cf62)', color: '#0b0b0b' }}>P</span>
          <span>{siteInfo.name}</span>
        </NavLink>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'flex-end' }}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                padding: '10px 14px',
                borderRadius: 999,
                color: isActive ? '#0b0b0b' : 'var(--text)',
                background: isActive ? 'linear-gradient(135deg, #d4af37, #f5cf62)' : 'transparent',
                border: isActive ? '1px solid transparent' : '1px solid rgba(212,175,55,0.16)',
                fontSize: '0.95rem',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
