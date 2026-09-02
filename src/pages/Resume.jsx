import React from 'react';

export default function Resume() {
  return (
    <div className="page page-resume">
      <div className="resume-header">
        <h1>📄 Lucy Huang</h1>
        <p className="contact-line">
          📍 Auckland, New Zealand &nbsp;|&nbsp; 📧{' '}
          <a href="mailto:lulucy99@foxmail.com">lulucy99@foxmail.com</a> &nbsp;|&nbsp; 📞{' '}
          <a href="tel:+640274668139">027 466 8139</a>
        </p>
        <a className="btn btn-primary" href="/resume-lucy-huang.pdf" download>
          ⬇ Download PDF
        </a>
      </div>

      <section className="card resume-section accent-border-blue">
        <h2 className="card-title accent-blue">Career Objective</h2>
        <p>
          Collaborative and motivated electronics student (NZSE Level 6) seeking an entry-level role or
          internship. Passionate about applying hands-on technical skills to solve real-world problems.
          Proven track record of strong interpersonal skills and team leadership across diverse roles,
          with a commitment to fostering positive and energetic team cultures.
        </p>
      </section>

      <section className="card resume-section accent-border-green">
        <h2 className="card-title accent-green">Education</h2>
        <p className="entry-title">NZ Diploma in Engineering (Electronics Strand)</p>
        <p className="entry-meta">New Zealand Skills and Education Group (NZSE), Auckland | Feb 2025 – Present</p>
        <ul>
          <li>Completed courses in Mathematics, Electronic Fundamentals, and Electronic Principles (all passed and above 80%)</li>
          <li>Currently studying Engineering Drawing and Python Programming</li>
          <li>Ranked among top students in the class</li>
        </ul>
      </section>

      <section className="card resume-section accent-border-yellow">
        <h2 className="card-title accent-yellow">Professional Experience</h2>

        <p className="entry-title">Waitress | SZIMPLA, New Zealand | 2023 – Present</p>
        <ul>
          <li>Thrive in a busy, fast-paced restaurant setting, prioritizing tasks and maintaining accuracy under pressure.</li>
          <li>Successfully immersed in New Zealand culture while interacting with a diverse clientele, honing the ability to connect with people from all walks of life.</li>
          <li>Proactively facilitate communication and foster team cohesion during demanding shifts to ensure seamless service.</li>
        </ul>

        <p className="entry-title">Merchandiser | Genco Import &amp; Export Ltd, Shenzhen | 2019 – 2023</p>
        <ul>
          <li>Managed end-to-end procurement processes, including product sourcing, contract negotiation, and order follow-up.</li>
          <li>Built and maintained strong professional relationships with diverse suppliers, ensuring timely order fulfillment and quality.</li>
          <li>Fostered a positive team environment by organizing group hiking and workout sessions.</li>
        </ul>

        <p className="entry-title">Personal Trainer (Part-Time) | Fitness Studio, Shenzhen | 2022 – 2023</p>
        <ul>
          <li>Conducted personalized fitness training in a supportive environment, fostering a motivating atmosphere.</li>
        </ul>
      </section>

      <section className="card resume-section accent-border-rose">
        <h2 className="card-title accent-rose">Skills</h2>
        <dl className="skills-list">
          <dt>Technical</dt>
          <dd>Basic circuit analysis, soldering, digital/analog electronics, multimeter and oscilloscope usage</dd>
          <dt>Programming &amp; Tools</dt>
          <dd>Python, C, Excel, Engineering drawing tools, Altium, LTSpice</dd>
          <dt>Soft Skills</dt>
          <dd>Team leadership, culture building, interpersonal communication, adaptability</dd>
        </dl>
      </section>
    </div>
  );
}
