import React, { useState } from 'react';
import { Link, useRouter } from '../router.jsx';
import { NAV_LINKS } from '../nav-links.js';

export default function Nav() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          Lucy Huang
        </Link>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links${open ? ' is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link nav-link--${link.accent}${path === link.to ? ' is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
