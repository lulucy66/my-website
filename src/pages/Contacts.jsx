import React from 'react';

const CONTACTS = [
  {
    label: 'Email',
    value: 'lulucy99@foxmail.com',
    href: 'mailto:lulucy99@foxmail.com',
    accent: 'blue',
  },
  {
    label: 'Phone',
    value: '027 466 8139',
    href: 'tel:+640274668139',
    accent: 'green',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/lucy-com-cn',
    href: 'https://www.linkedin.com/in/lucy-com-cn',
    accent: 'blue',
  },
  {
    label: 'Instagram',
    value: '@lucy.com.cn',
    href: 'https://instagram.com/lucy.com.cn',
    accent: 'rose',
  },
];

export default function Contacts() {
  return (
    <div className="page page-contacts">
      <h1 className="accent-rose">📞 My Contacts</h1>
      <p className="page-intro">I'd love to hear from you — reach out any of these ways.</p>

      <div className="contact-grid">
        {CONTACTS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`card contact-card accent-border-${c.accent}`}
          >
            <span className="contact-label">{c.label}</span>
            <span className="contact-value">{c.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
