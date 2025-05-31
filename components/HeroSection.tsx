'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '2rem 1.5rem' : '2rem 3rem',
      background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'linear-gradient(135deg, rgba(45, 55, 72, 0.05), rgba(45, 55, 72, 0.02))',
        borderRadius: '50%',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'linear-gradient(45deg, rgba(45, 55, 72, 0.03), rgba(45, 55, 72, 0.01))',
        borderRadius: '50%',
        zIndex: 1
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: isMobile ? 'flex' : 'grid',
        gridTemplateColumns: isMobile ? 'none' : '1fr 1fr',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
        textAlign: isMobile ? 'center' : 'left'
      }}>
        {/* Left side - Text content */}
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
            👋 Hey there, I'm Ruitao
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: '700',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-darker))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            I'm a Full Stack Product Designer &
            Developer
          </h1>

          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '500px'
          }}>
            I craft digital experiences that blend beautiful design with seamless functionality. 
            I am passionate about solving problems through user-centered design.
          </p>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            <button 
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-darker) 100%)',
                color: 'white',
                border: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 30px rgba(45, 55, 72, 0.2)',
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
              View My Work
            </button>

            <Link 
              href="/contact"
              style={{
                color: 'var(--primary-dark)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                padding: '1rem 2.5rem',
                border: '2px solid var(--primary-dark)',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                display: 'inline-block'
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
              Let's Connect
            </Link>
          </div>

          {/* Stats or highlights */}
          <div style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(45, 55, 72, 0.1)',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary-dark)' }}>4+</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Projects Completed</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary-dark)' }}>5+</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Years Experience</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary-dark)' }}>∞</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Ideas & Passion</div>
            </div>
          </div>
        </div>

        {/* Right side - Visual content */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Hero image or illustration */}
          <div style={{
            width: isMobile ? '300px' : '500px',
            height: isMobile ? '300px' : '500px',
            background: 'linear-gradient(135deg, rgba(45, 55, 72, 0.1), rgba(45, 55, 72, 0.05))',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            
            <Image
              src="/images/MeCover.JPG" // Add your hero image to public/images/
              alt="Ruitao Cover Photo"
              fill
              style={{
                objectFit: 'cover',
                borderRadius: '30px'
              }}
              priority
            />

            {/* Floating project previews */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '120px',
              height: '80px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: '600',
              color: 'var(--primary-dark)',
              transform: 'rotate(5deg)'
            }}>
              KOMMA
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '30px',
              width: '120px',
              height: '80px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: '600',
              color: 'var(--primary-dark)',
              transform: 'rotate(-5deg)'
            }}>
              ATT
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}>
        <span>Scroll to explore</span>
        <div style={{
          width: '2px',
          height: '30px',
          background: 'var(--primary-dark)',
          borderRadius: '2px'
        }} />
      </div>
    </section>
  );
}