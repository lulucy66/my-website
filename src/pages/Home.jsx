import React from 'react';
import { Link } from '../router.jsx';
import { NAV_LINKS } from '../nav-links.js';

export default function Home() {
  return (
    <div className="page page-home">
      <div className="hero-text">
        <p className="eyebrow">Electronics Engineering Student · Auckland, NZ</p>
        <h1>👋 Hello, I'm Lucy!</h1>
      </div>

      <section className="card about-card">
        <h2 className="card-title accent-green">About Me</h2>
        <p>
          I'm an electronic engineering student at NZSE in Auckland. I love this field because I enjoy
          hands-on work and solving practical problems.
        </p>
        <p>
          I'm a positive, energetic person — whether I'm studying, at work, in the gym, or playing touch
          rugby, I stay proactive and keep a good attitude.
        </p>
        <p>
          I'm a fast learner and a team player, and I'm excited to bring my passion, work ethic, and
          energy to a team.
        </p>
        <p className="callout">Actively seeking new opportunities.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="/resume-lucy-huang.pdf" download>
            ⬇ Download Resume (PDF)
          </a>
          <Link className="btn btn-ghost" to="/contacts">
            Get in touch
          </Link>
        </div>
      </section>

      <div className="profile-photo-wrap">
        <img src="/profile2.jpg" alt="Lucy standing outdoors in front of flowering shrubs" className="profile-photo" />
      </div>

      <h2 className="section-heading">Explore My Pages</h2>
      <div className="nav-grid">
        {NAV_LINKS.map((link) => (
          <Link key={link.to} to={link.to} className={`nav-card nav-card--${link.accent}`}>
            <span className="nav-card-icon" aria-hidden="true">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
