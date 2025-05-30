'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '1rem 2rem' : '1.25rem 2rem',
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: isScrolled ? 'blur(30px)' : 'blur(25px)',
        WebkitBackdropFilter: isScrolled ? 'blur(30px)' : 'blur(25px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.06)' : 'none'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <Link 
          href="/" 
          style={{
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 0.3s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Image 
            src="/images/Logo Dark.png" // Add your logo to public/images/logo.png
            alt="Ruitao Logo" 
            width={180} 
            height={50}
            style={{ borderRadius: '8px' }}
          />
        </Link>
        
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {['Home', 'About', 'Projects'].map((item, index) => {
            const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <Link 
                key={index}
                href={href}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  letterSpacing: '-0.01em',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 55, 72, 0.05), rgba(45, 55, 72, 0.1))';
                  e.currentTarget.style.color = 'var(--primary-dark)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {item}
              </Link>
            );
          })}
        </div>

        <Link 
          href="/contact"
          style={{
            background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-darker) 100%)',
            color: 'white',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.95rem',
            padding: '0.875rem 2rem',
            borderRadius: '50px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 20px rgba(45, 55, 72, 0.2)',
            letterSpacing: '-0.01em',
            position: 'relative',
            overflow: 'hidden',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(45, 55, 72, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(45, 55, 72, 0.2)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
          }}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}