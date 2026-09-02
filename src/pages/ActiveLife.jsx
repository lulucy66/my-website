import React from 'react';

const photos = [
  { src: '/gym1.jpg', alt: 'Lucy training at the gym' },
  { src: '/gym2.jpg', alt: 'Lucy training at the gym' },
  { src: '/rugby1.jpg', alt: 'Lucy with her touch rugby team' },
];

export default function ActiveLife() {
  return (
    <div className="page page-active-life">
      <h1 className="accent-purple">🏋️‍♀️ My Active Life</h1>
      <p className="page-intro">Work hard, train harder! Here are some moments from the gym and the touch rugby field.</p>

      <div className="photo-grid">
        {photos.map((photo) => (
          <img key={photo.src} src={photo.src} alt={photo.alt} className="life-photo" loading="lazy" />
        ))}
      </div>
    </div>
  );
}
