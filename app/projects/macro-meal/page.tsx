'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import MacroMealProject from './macro-meal-content';

export default function MacroMealProtected() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (password === '#M@cr0Me@l24') {
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
    return <MacroMealProject />;
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
            {/* Create a mock preview or use an actual image if available */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              color: 'white',
              textAlign: 'center',
              padding: '2rem'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🍽️</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                Macro Meal Generator
              </h3>
            </div>
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
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Macro Meal Case Study
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
              This project contains detailed AI implementation strategies and proprietary design decisions. Please enter the password to access the full case study.
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
                    if (!error) e.currentTarget.style.borderColor = '#f97316';
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
                    : 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  transform: isSubmitting ? 'none' : 'scale(1)',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(249, 115, 22, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {isSubmitting ? 'Verifying...' : 'Access Project'}
              </button>
            </form>

            <div style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(234, 88, 12, 0.02))',
              borderRadius: '12px',
              border: '1px solid rgba(249, 115, 22, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🍽️</span>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--primary-dark)',
                  margin: 0
                }}>
                  What's Inside
                </h4>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem',
                color: 'var(--text-secondary)'
              }}>
                <li style={{ marginBottom: '0.3rem' }}>• AI prompt engineering strategies</li>
                <li style={{ marginBottom: '0.3rem' }}>• User testing insights & improvements</li>
                <li style={{ marginBottom: '0.3rem' }}>• Technical implementation roadmap</li>
                <li>• Nutrition API integration details</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .access-button:disabled {
          cursor: not-allowed !important;
          transform: none !important;
        }
      `}</style>
    </>
  );
}