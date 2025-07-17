'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ 
        background: 'linear-gradient(180deg, #f9f9f9 0%, #ffffff 50%, #f9f9f9 100%)',
        minHeight: '100vh'
      }}>
        {/* Hero Section */}
        <section style={{
          padding: '6rem 3rem 4rem 3rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Left - Text Content */}
            <div>
              <div style={{
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                background: 'rgba(45, 55, 72, 0.1)',
                borderRadius: '50px',
                marginBottom: '2rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                color: 'var(--primary-dark)'
              }}>
                👋 Nice to meet you
              </div>

              <h1 style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                marginBottom: '2rem',
                background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-darker))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                I'm Ruitao
              </h1>

              <p style={{
                fontSize: '1.3rem',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}>
                The possibilities of creation are greater than ever before. More tools than ever before are allowing people to create faster and more effective solutions to their problems and needs. I'm implementing all the tools I have at my disposal to create solutions in fitness, cooking, sports, music, and other industries that I am passionate about. 
              </p>

              <div style={{
                display: 'flex',
                gap: '1.5rem',
                marginTop: '2rem'
              }}>
                <Link 
                  href="/contact"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-darker) 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    padding: '1rem 2.5rem',
                    borderRadius: '50px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 8px 30px rgba(45, 55, 72, 0.2)',
                    display: 'inline-block',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(45, 55, 72, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(45, 55, 72, 0.2)';
                  }}
                >
                  Let's Work Together
                </Link>

                <a 
                  href="/resume/Ruitao Chen - Product Designer Resume.pdf" // Add your resume
                  style={{
                    color: 'var(--primary-dark)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    padding: '1rem 2.5rem',
                    border: '2px solid var(--primary-dark)',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--primary-dark)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--primary-dark)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                width: '400px',
                height: '500px',
                position: 'relative',
                borderRadius: '30px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                background: 'linear-gradient(135deg, rgba(45, 55, 72, 0.1), rgba(45, 55, 72, 0.05))'
              }}>
                {/* Your Actual Photo */}
                <img
                  src="/images/MeJapan.jpeg"
                  alt="Ruitao Chen - UX/UI Designer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                />
                
                {/* Decorative elements */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-darker))',
                  borderRadius: '50%',
                  opacity: 0.1,
                  zIndex: 1
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '150px',
                  height: '150px',
                  background: 'linear-gradient(45deg, var(--primary-dark), var(--primary-darker))',
                  borderRadius: '50%',
                  opacity: 0.05,
                  zIndex: 1
                }} />
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Experience Section */}
        <section style={{
          padding: '4rem 3rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem'
          }}>
            {/* My Story */}
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: 'var(--primary-dark)'
              }}>
                My Story
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)'
                }}>
                  Hi, I am a product designer with a passion for solving real problems through thoughtful, intuitive design. My journey began in the world of traditional art, where I learned to see the world through form, color, and composition. That foundation now fuels how I approach digital experiences: with both creative sensitivity and systems thinking.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)'
                }}>
                  Over the past few years, I have been focused on designing for web and mobile, working on everything from user flows to visual systems. I enjoy working on products that serve a real purpose — especially in the fast-evolving space of SaaS, where I have found my curiosity and drive thrive.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)'
                }}>
                  As a young teen, I was trained in traditional art at Sharron Art Center Alongside design, I have been growing my skills in front-end development, bringing more of my ideas to life through code. I believe that having a hand in both design and implementation makes me a more empathetic and effective problem solver.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)'
                }}>
                 Looking ahead, I am building toward a future where I can launch products that spark change in industries I care deeply about — music, Mixed- Martial Arts, cooking, and sports. Whether it is making tools for creators, reimagining fan experiences, or simplifying everyday routines, I amm driven by the idea of creating things that matter.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: 'var(--primary-dark)'
              }}>
                Skills & Tools
              </h2>

              {/* Skill Categories */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  {
                    category: 'Design',
                    skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Design Systems']
                  },
                  {
                    category: 'Tools',
                    skills: ['Figma', 'Adobe Creative Suite', 'Framer']
                  },
                  {
                    category: 'Development',
                    skills: ['Vibe Coding', 'HTML/CSS', 'React', 'Next.js', 'JavaScript', 'Responsive Design']
                  }
                ].map((skillGroup, index) => (
                  <div key={index}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: 'var(--primary-dark)'
                    }}>
                      {skillGroup.category}
                    </h3>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.75rem'
                    }}>
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          style={{
                            padding: '0.5rem 1.25rem',
                            background: 'rgba(45, 55, 72, 0.1)',
                            color: 'var(--primary-dark)',
                            borderRadius: '25px',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '4rem 3rem',
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(45, 55, 72, 0.05), rgba(45, 55, 72, 0.02))',
            padding: '4rem 2rem',
            borderRadius: '30px'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'var(--primary-dark)'
            }}>
              Let's Create Something Amazing
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }}>
              I'm always excited to take on new challenges and collaborate with passionate teams.
            </p>
            <Link 
              href="/contact"
              style={{
                background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-darker) 100%)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.2rem',
                padding: '1.25rem 3rem',
                borderRadius: '50px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 30px rgba(45, 55, 72, 0.2)',
                display: 'inline-block',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(45, 55, 72, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(45, 55, 72, 0.2)';
              }}
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}