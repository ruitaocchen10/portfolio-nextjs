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
        padding: isScrolled ? '.75rem 2rem' : '1rem 2rem',
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
        >
          <Image 
            src="/images/Logo Dark.png"
            alt="Ruitao Logo" 
            width={180} 
            height={50}
            style={{ borderRadius: '8px' }}
            priority
            sizes="180px"
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
                  letterSpacing: '-0.01em'
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
            letterSpacing: '-0.01em'
          }}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}