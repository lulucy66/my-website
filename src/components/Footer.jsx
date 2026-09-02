import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>
        © {year} Lucy Huang · Built with React &amp; Vite ·{' '}
        <a href="mailto:lulucy99@foxmail.com">lulucy99@foxmail.com</a>
      </p>
    </footer>
  );
}
