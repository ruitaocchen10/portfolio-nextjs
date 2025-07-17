'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import PrommuniProject from './prommuni-content';

export default function PrommuniProtected() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (password === '#Pr0mmun1MP') {
      // Show success state briefly
      setTimeout(() => {
        setIsAuthenticated(true);
        setIsSubmitting(false);
      }, 500);
    } else {
      // Show error state
      setError('Incorrect password. Please try again.');
      setIsSubmitting(false);
      
      // Clear the input after error
      setTimeout(() => {
        setPassword('');
      }, 1500);
    }
  };

  // If authenticated, show the actual project content
  if (isAuthenticated) {
    return <PrommuniProject />;
  }

  // Otherwise, show password protection screen
  return (
    <>
      <Navbar />
      <main style={{ 
        backgroundColor: '#f9f9f9', 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{
          maxWidth: '800px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left - Project Preview */}
          <div style={{
            position: 'relative',
            height: '400px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
          }}>
            <Image
              src="/images/PrommuniCoverMockup.png"
              alt="Prommuni Preview"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* Lock Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(4px)'
            }}>
              <div style={{
                fontSize: '4rem',
                color: 'white',
                opacity: 0.9
              }}>
                🔒
              </div>
            </div>
          </div>

          {/* Right - Password Form */}
          <div style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, #4facfe 0%, #00c6fb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Prommuni Case Study
            </h1>
            
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'var(--primary-dark)'
            }}>
              Password Protected Project
            </h3>
            
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              This project is currently under NDA and contains confidential information. Please enter the password to access the full case study.
            </p>

            <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label 
                  htmlFor="passwordInput"
                  style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--primary-dark)',
                    marginBottom: '0.5rem'
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="passwordInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: error ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    backgroundColor: isSubmitting ? '#f7fafc' : 'white'
                  }}
                  onFocus={(e) => {
                    if (!error) e.currentTarget.style.borderColor = '#4facfe';
                  }}
                  onBlur={(e) => {
                    if (!error) e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                />
                {error && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '0.9rem',
                    marginTop: '0.5rem'
                  }}>
                    {error}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="access-button"
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  background: isSubmitting 
                    ? '#ccc' 
                    : 'linear-gradient(135deg, #4facfe 0%, #00c6fb 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(79, 172, 254, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <span className="button-text">
                  {isSubmitting ? 'Checking...' : 'Access Project'}
                </span>
                <span className="button-icon">
                  {isSubmitting ? '⏳' : '→'}
                </span>
              </button>
            </form>

            {/* Project Info */}
            <div style={{
              background: '#f8f9fa',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                fontSize: '0.9rem'
              }}>
                <div>
                  <strong style={{ color: 'var(--primary-dark)' }}>Project Type:</strong>
                  <div style={{ color: 'var(--text-secondary)' }}>Roommate/Housing App</div>
                </div>
                <div>
                  <strong style={{ color: 'var(--primary-dark)' }}>Role:</strong>
                  <div style={{ color: 'var(--text-secondary)' }}>Product Designer</div>
                </div>
                <div>
                  <strong style={{ color: 'var(--primary-dark)' }}>Duration:</strong>
                  <div style={{ color: 'var(--text-secondary)' }}>January 2025 - Present</div>
                </div>
                <div>
                  <strong style={{ color: 'var(--primary-dark)' }}>Status:</strong>
                  <div style={{ color: 'var(--text-secondary)' }}>Under NDA</div>
                </div>
              </div>
            </div>

            <Link 
              href="/projects"
              style={{
                color: '#4facfe',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = 'none';
              }}
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}