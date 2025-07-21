'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-darker) 100%)',
      color: 'white',
      padding: '4rem 3rem 2rem 3rem',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a 
                href="https://www.linkedin.com/in/ruitaocchen/" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                in
              </a>
              
              <a 
                href="mailto:ruitaocchen@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                @
              </a>
              
              <a 
                href="/resume/Ruitao Chen - Resume.pdf" // Add your resume link
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                📄
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Quick Links
            </h4>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    width: 'fit-content'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

{/* Featured Projects */}
<div>
  <h4 style={{
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: 'white'
  }}>
    Featured Projects
  </h4>
  <nav style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
{[
  { name: 'Macro Meal Generator', href: '/projects/macro-meal' },
  { name: 'ATT', href: '/projects/att' },
  { name: 'Prommuni', href: '/projects/prommuni' },
  { name: 'SellMax', href: '/projects/sellmax' }
].map((project, index) => (
  <Link
    key={index}
    href={project.href}
    style={{
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      width: 'fit-content'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = 'white';
      e.currentTarget.style.transform = 'translateX(8px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
      e.currentTarget.style.transform = 'translateX(0)';
    }}
  >
    {project.name}
  </Link>
))}
  </nav>
</div>

          {/* Get In Touch */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Let's Work Together
            </h4>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem'
            }}>
              I'm always excited to take on new challenges and collaborate with passionate teams.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.875rem 2rem',
                background: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Start a Project
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'rgba(255, 255, 255, 0.2)',
          margin: '3rem 0 2rem 0'
        }} />

        {/* Bottom Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Copyright & Fun Text */}
          <div>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 0 0.5rem 0',
              fontWeight: '600'
            }}>
              Copyright {currentYear} Ruitao Chen. All Rights Reserved.
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0,
              fontStyle: 'italic'
            }}>
              Can you solve a Rubik's Cube faster than me? Name all the US Presidents in order? Juggle?
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Back to Top
            <span style={{ fontSize: '1.1rem' }}>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}