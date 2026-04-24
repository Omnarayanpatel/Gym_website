import { NavLink } from 'react-router-dom';
import { siteInfo } from '../data/siteInfo';
import logo from '../assets/power_fit_logo (1).png';

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
    <header className="navbar-shell">
      <div className="container navbar">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt={`${siteInfo.name} logo`} className="navbar-logo" />
          <span className="navbar-brand-copy">
            <strong>{siteInfo.name}</strong>
            <span>{siteInfo.tagline}</span>
          </span>
        </NavLink>

        <div className="navbar-nav-wrap">
          <nav className="navbar-links" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `navbar-link${isActive ? ' is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
}
