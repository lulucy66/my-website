import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  // ---------------- 吐槽子页的专属状态逻辑 ----------------
  const [btnTexts, setBtnTexts] = useState({
    mom: "my mom",
    friend: "my friend",
    dad: "my dad",
    gemini: "Gemini",
    landlord: "landlord"
  });

  const quotes = {
    mom: '"I am so proud of you"',
    friend: '"She won\'t be coming with us. She has to go play touch rugby"',
    dad: '"Find a husband!"',
    gemini: '"You are fit, strong, and smart!"',
    landlord: '"oh you are going to gym now?"'
  };

  const handleMouseEnter = (key) => {
    setBtnTexts(prev => ({ ...prev, [key]: quotes[key] }));
  };

  const handleMouseLeave = (key, originalText) => {
    setBtnTexts(prev => ({ ...prev, [key]: originalText }));
  };
  // ----------------------------------------------------

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '40px 20px', maxWidth: '800px', margin: '0 auto', background: '#0f172a', color: '#f8fafc', minHeight: '100vh', textAlign: 'center' }}>
      
      {/* 渲染主页 */}
      {currentTab === 'home' && (
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#38bdf8' }}>👋 Hello, I'm Lucy!</h1>
          
          {/* 个人简介文本 */}
          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '16px', marginBottom: '30px', textAlign: 'left', lineHeight: '1.6', color: '#cbd5e1', border: '1px solid #334155' }}>
            <h3 style={{ color: '#34d399', marginTop: 0, marginBottom: '12px' }}>About Me</h3>
            <p style={{ margin: '0 0 12px 0' }}>
              I am an electronic engineering student at NZSE in Auckland. I really love this field because I enjoy hands-on work and solving practical problems.
            </p>
            <p style={{ margin: '0 0 12px 0' }}>
              I am a positive, optimistic, and energetic person. Whether I am handling my studies, work, the gym, or playing touch rugby, I always stay proactive and keep a great attitude.
            </p>
            <p style={{ margin: '0 0 12px 0' }}>
              I am a fast learner and a team player. I am excited to bring my passion, strong work ethic, and positive energy!
            </p>
            <p style={{ margin: '0', color: '#38bdf8', fontWeight: 'bold' }}>
              Actively seeking new opportunities.
            </p>
          </div>

          {/* 照片展示区：整张图放大显示 */}
          <div style={{ marginBottom: '30px' }}>
            <img 
              src="/profile2.jpg" 
              alt="Profile" 
              style={{ 
                width: '100%', 
                maxWidth: '500px', 
                borderRadius: '20px', 
                border: '4px solid #38bdf8', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)' 
              }} 
            />
          </div>

          {/* 子页面导航按钮 */}
          <h3 style={{ color: '#94a3b8', marginBottom: '20px', fontSize: '1.1rem' }}>Explore My Pages</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
            
            <button 
              onClick={() => setCurrentTab('resume')}
              style={{ width: '100%', maxWidth: '400px', padding: '14px 20px', background: '#1e293b', color: '#38bdf8', border: '2px solid #38bdf8', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}
            >
              My resume
            </button>

            <button 
              onClick={() => setCurrentTab('projects')}
              style={{ width: '100%', maxWidth: '400px', padding: '14px 20px', background: '#1e293b', color: '#34d399', border: '2px solid #34d399', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}
            >
              my projects
            </button>

            <button 
              onClick={() => setCurrentTab('comments')}
              style={{ width: '100%', maxWidth: '400px', padding: '14px 20px', background: '#1e293b', color: '#fbbf24', border: '2px solid #fbbf24', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}
            >
              comments about me
            </button>

            <button 
              onClick={() => setCurrentTab('contacts')}
              style={{ width: '100%', maxWidth: '400px', padding: '14px 20px', background: '#1e293b', color: '#f43f5e', border: '2px solid #f43f5e', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}
            >
              my contacts
            </button>

          </div>
        </div>
      )}

      {/* ---------------- 子页面：Comments ---------------- */}
      {currentTab === 'comments' && (
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fbbf24' }}>🏆 comments from other people</h1>
          <p style={{ color: '#94a3b8', marginBottom: '40px' }}>move mouse to the buttons to know more about me：</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            <button onMouseEnter={() => handleMouseEnter('mom')} onMouseLeave={() => handleMouseLeave('mom', 'my mom')} style={{ width: '100%', maxWidth: '500px', padding: '16px 20px', background: '#1e293b', color: '#fbbf24', border: '2px solid #fbbf24', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>{btnTexts.mom}</button>
            <button onMouseEnter={() => handleMouseEnter('friend')} onMouseLeave={() => handleMouseLeave('friend', 'my friend')} style={{ width: '100%', maxWidth: '500px', padding: '16px 20px', background: '#1e293b', color: '#f43f5e', border: '2px solid #f43f5e', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>{btnTexts.friend}</button>
            <button onMouseEnter={() => handleMouseEnter('dad')} onMouseLeave={() => handleMouseLeave('dad', 'my dad')} style={{ width: '100%', maxWidth: '500px', padding: '16px 20px', background: '#1e293b', color: '#38bdf8', border: '2px solid #38bdf8', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>{btnTexts.dad}</button>
            <button onMouseEnter={() => handleMouseEnter('gemini')} onMouseLeave={() => handleMouseLeave('gemini', 'Gemini')} style={{ width: '100%', maxWidth: '500px', padding: '16px 20px', background: '#1e293b', color: '#34d399', border: '2px solid #34d399', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>{btnTexts.gemini}</button>
            <button onMouseEnter={() => handleMouseEnter('landlord')} onMouseLeave={() => handleMouseLeave('landlord', 'landlord')} style={{ width: '100%', maxWidth: '500px', padding: '16px 20px', background: '#1e293b', color: '#a78bfa', border: '2px solid #a78bfa', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>{btnTexts.landlord}</button>
          </div>

          <button onClick={() => setCurrentTab('home')} style={{ marginTop: '40px', padding: '10px 20px', background: '#334155', color: '#f8fafc', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            ← Back to Home
          </button>
        </div>
      )}

      {/* ---------------- 子页面：Resume ---------------- */}
      {currentTab === 'resume' && (
        <div style={{ textAlign: 'left', lineHeight: '1.6' }}>
          <h1 style={{ color: '#38bdf8', textAlign: 'center', marginBottom: '20px' }}>📄 Lucy (Silu) Huang</h1>
          <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '30px' }}>
            📍 Auckland, New Zealand | 📧 lulucy99@foxmail.com | 📞 0274668139
          </p>

          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', marginBottom: '20px', borderLeft: '4px solid #38bdf8' }}>
            <h3 style={{ color: '#38bdf8', marginTop: 0 }}>Career Objective</h3>
            <p style={{ color: '#cbd5e1', margin: 0 }}>Collaborative and motivated electronics student (NZSE Level 6) seeking an entry-level role or internship. Passionate about applying hands-on technical skills to solve real-world problems. Proven track record of strong interpersonal skills and team leadership across diverse roles, with a commitment to fostering positive and energetic team cultures.</p>
          </div>

          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', marginBottom: '20px', borderLeft: '4px solid #34d399' }}>
            <h3 style={{ color: '#34d399', marginTop: 0 }}>Education</h3>
            <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#f8fafc' }}>NZ Diploma in Engineering (Electronics Strand)</p>
            <p style={{ margin: '0 0 10px 0', color: '#94a3b8' }}>New Zealand Skills and Education Group (NZSE), Auckland | Feb 2025 – Present</p>
            <ul style={{ color: '#cbd5e1', paddingLeft: '20px', margin: 0 }}>
              <li>Completed courses in Mathematics, Electronic Fundamentals, and Electronic Principles (all passed and above 80%)</li>
              <li>Currently studying Engineering Drawing and Python Programming</li>
              <li>Ranked among top students in the class</li>
            </ul>
          </div>

          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', marginBottom: '20px', borderLeft: '4px solid #fbbf24' }}>
            <h3 style={{ color: '#fbbf24', marginTop: 0 }}>Professional Experience</h3>
            
            <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#f8fafc' }}>Waitress | SZIMPLA, New Zealand | 2023 – Present</p>
            <ul style={{ color: '#cbd5e1', paddingLeft: '20px', margin: '0 0 15px 0' }}>
              <li>Thrive in a busy, fast-paced restaurant setting, prioritizing tasks and maintaining accuracy under pressure.</li>
              <li>Successfully immersed in New Zealand culture while interacting with a diverse clientele, honing the ability to connect with people from all walks of life.</li>
              <li>Proactively facilitate communication and foster team cohesion during demanding shifts to ensure seamless service.</li>
            </ul>

            <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#f8fafc' }}>Merchandiser | Genco Import & Export Ltd, Shenzhen | 2019 – 2023</p>
            <ul style={{ color: '#cbd5e1', paddingLeft: '20px', margin: '0 0 15px 0' }}>
              <li>Managed end-to-end procurement processes, including product sourcing, contract negotiation, and order follow-up.</li>
              <li>Built and maintained strong professional relationships with diverse suppliers, ensuring timely order fulfillment and quality.</li>
              <li>Fostered a positive team environment by organizing group hiking and workout sessions.</li>
            </ul>

            <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#f8fafc' }}>Personal Trainer (Part-Time) | Fitness Studio, Shenzhen | 2022 – 2023</p>
            <ul style={{ color: '#cbd5e1', paddingLeft: '20px', margin: 0 }}>
              <li>Conducted personalized fitness training in a supportive environment, fostering a motivating atmosphere.</li>
            </ul>
          </div>

          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', marginBottom: '30px', borderLeft: '4px solid #f43f5e' }}>
            <h3 style={{ color: '#f43f5e', marginTop: 0 }}>Skills</h3>
            <p style={{ color: '#cbd5e1', margin: 0 }}>
              <strong>Technical:</strong> Basic circuit analysis, soldering, digital/analog electronics, multimeter and oscilloscope usage<br/>
              <strong>Programming & Tools:</strong> Python, C, Excel, Engineering drawing tools, Altium, LTSpice<br/>
              <strong>Soft Skills:</strong> Team Leadership, Culture Building, Interpersonal Communication, adaptability
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setCurrentTab('home')} style={{ padding: '10px 20px', background: '#334155', color: '#f8fafc', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              ← Back to Home
            </button>
          </div>
        </div>
      )}

      {/* ---------------- 子页面：Projects ---------------- */}
      {currentTab === 'projects' && (
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ color: '#34d399', textAlign: 'center', marginBottom: '20px' }}>💻 My Projects</h1>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', marginBottom: '20px', borderLeft: '4px solid #34d399' }}>
            <h3 style={{ color: '#34d399', marginTop: 0 }}>Simple Amplifier Design (Course Lab)</h3>
            <p style={{ color: '#cbd5e1' }}>Designed and tested a basic amplifier circuit using breadboard and multimeter; interpreted frequency response and gain characteristics.</p>
          </div>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', marginBottom: '30px', borderLeft: '4px solid #34d399' }}>
            <h3 style={{ color: '#34d399', marginTop: 0 }}>Gas Leak and Fire Detection System (Ongoing)</h3>
            <p style={{ color: '#cbd5e1' }}>Stone project focused on safety monitoring systems.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setCurrentTab('home')} style={{ padding: '10px 20px', background: '#334155', color: '#f8fafc', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              ← Back to Home
            </button>
          </div>
        </div>
      )}

      {/* ---------------- 子页面：Contacts ---------------- */}
      {currentTab === 'contacts' && (
        <div>
          <h1 style={{ color: '#f43f5e', marginBottom: '30px' }}>📞 My Contacts</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginBottom: '30px' }}>
            
            {/* Instagram 卡片 */}
            <div style={{ width: '100%', maxWidth: '400px', background: '#1e293b', padding: '20px', borderRadius: '16px', border: '2px solid #f43f5e' }}>
              <p style={{ fontSize: '1.1rem', color: '#cbd5e1', margin: '0 0 8px 0' }}>Instagram:</p>
              <a 
                href="https://instagram.com/lucy.com.cn" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ fontSize: '1.3rem', color: '#38bdf8', fontWeight: 'bold', textDecoration: 'none' }}
              >
                @lucy.com.cn
              </a>
            </div>

            {/* LinkedIn 卡片 */}
            <div style={{ width: '100%', maxWidth: '400px', background: '#1e293b', padding: '20px', borderRadius: '16px', border: '2px solid #38bdf8' }}>
              <p style={{ fontSize: '1.1rem', color: '#cbd5e1', margin: '0 0 8px 0' }}>LinkedIn:</p>
              <a 
                href="https://www.linkedin.com/in/lucy-com-cn" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ fontSize: '1.1rem', color: '#38bdf8', fontWeight: 'bold', textDecoration: 'none', wordBreak: 'break-all' }}
              >
                www.linkedin.com/in/lucy-com-cn
              </a>
            </div>

          </div>

          <div>
            <button onClick={() => setCurrentTab('home')} style={{ padding: '10px 20px', background: '#334155', color: '#f8fafc', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              ← Back to Home
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;