import React from 'react';

const projects = [
  {
    title: 'Simple Amplifier Design',
    tag: 'Course Lab',
    description:
      'Designed and tested a basic amplifier circuit using a breadboard and multimeter; interpreted frequency response and gain characteristics.',
    skills: ['Circuit Design', 'Breadboarding', 'Multimeter'],
  },
  {
    title: 'Gas Leak & Fire Detection System',
    tag: 'Ongoing',
    // NOTE: original copy said "Stone project" — likely a typo. Changed to
    // "Independent project" as a safe placeholder; please swap in the real
    // wording (solo/team project?) and add a sentence on the sensors/board used.
    description:
      'Independent project focused on safety monitoring — using sensors to detect gas leaks and fire risk and trigger an alert.',
    skills: ['Safety Systems', 'Sensors'],
  },
];

export default function Projects() {
  return (
    <div className="page page-projects">
      <h1 className="accent-green">💻 My Projects</h1>
      <p className="page-intro">
        A couple of hands-on builds from my electronics coursework — more are on the way as I progress
        through the diploma.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="card project-card accent-border-green" key={project.title}>
            <div className="project-card-head">
              <h2 className="card-title accent-green">{project.title}</h2>
              <span className="pill">{project.tag}</span>
            </div>
            <p>{project.description}</p>
            <div className="tag-row">
              {project.skills.map((skill) => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
