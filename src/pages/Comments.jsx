import React, { useState } from 'react';

const COMMENTS = [
  { key: 'mom', label: 'my mom', quote: '"I am so proud of you"', accent: 'yellow' },
  { key: 'friend', label: 'my friend', quote: '"She won\'t be coming with us. She has to go play touch rugby"', accent: 'rose' },
  { key: 'dad', label: 'my dad', quote: '"Find a husband!"', accent: 'blue' },
  { key: 'gemini', label: 'Gemini', quote: '"You are fit, strong, and smart!"', accent: 'green' },
  { key: 'landlord', label: 'landlord', quote: '"I guess you are going to the gym now?"', accent: 'purple' },
];

export default function Comments() {
  const [active, setActive] = useState(null);

  return (
    <div className="page page-comments">
      <h1 className="accent-yellow">🏆 Comments From Other People</h1>
      <p className="page-intro">Tap or hover a button to see what people in my life say about me:</p>

      <div className="comment-list">
        {COMMENTS.map((c) => (
          <button
            key={c.key}
            className={`comment-btn comment-btn--${c.accent}`}
            onMouseEnter={() => setActive(c.key)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(c.key)}
            onBlur={() => setActive(null)}
            onClick={() => setActive((cur) => (cur === c.key ? null : c.key))}
          >
            {active === c.key ? c.quote : c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
