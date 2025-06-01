'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/Navbar';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_wii2zyt';
  const EMAILJS_TEMPLATE_ID = 'template_sndbovj';
  const EMAILJS_PUBLIC_KEY = 'oag3XExwD0YIcR1g7';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form.current,
          EMAILJS_PUBLIC_KEY
        );
        
        console.log('Email sent successfully:', result.text);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <main style={{ 
        background: 'linear-gradient(180deg, #f9f9f9 0%, #ffffff 50%, #f9f9f9 100%)',
        minHeight: '100vh',
        padding: '4rem 3rem 4rem 3rem'
      }}>
        {/* Header Section */}
        <section style={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(45, 55, 72, 0.1)',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
            fontWeight: '500',
            color: 'var(--primary-dark)'
          }}>
            📫 Let's Connect
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-darker))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Get In Touch
          </h1>
        </section>

        {/* Main Contact Section */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Contact Form */}
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--primary-dark)'
              }}>
                Send a Message
              </h2>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}>
                I'll get back to you within 24 hours.
              </p>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div style={{
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  background: 'rgba(67, 233, 123, 0.1)',
                  border: '1px solid rgba(67, 233, 123, 0.3)',
                  borderRadius: '12px',
                  color: '#16a34a',
                  fontSize: '0.95rem'
                }}>
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '12px',
                  color: '#dc2626',
                  fontSize: '0.95rem'
                }}>
                  ❌ Something went wrong. Please try again or email me directly.
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: 'var(--primary-dark)',
                      marginBottom: '0.5rem'
                    }}>
                      Name *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem 1.25rem',
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary-dark)'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: 'var(--primary-dark)',
                      marginBottom: '0.5rem'
                    }}>
                      Email *
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem 1.25rem',
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary-dark)'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      placeholder="youremail@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--primary-dark)',
                    marginBottom: '0.5rem'
                  }}>
                    Company (Optional)
                  </label>
                  <input 
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem 1.25rem',
                      borderRadius: '12px',
                      border: '2px solid #e2e8f0',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-dark)'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--primary-dark)',
                    marginBottom: '0.5rem'
                  }}>
                    Message *
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '1rem 1.25rem',
                      borderRadius: '12px',
                      border: '2px solid #e2e8f0',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-dark)'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: isSubmitting 
                      ? '#ccc' 
                      : submitStatus === 'success'
                        ? 'linear-gradient(135deg, #67E97B 0%, #38F9D7 100%)'
                        : 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-darker) 100%)',
                    color: 'white',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    padding: '1.25rem 2rem',
                    borderRadius: '50px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 8px 30px rgba(45, 55, 72, 0.2)',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(45, 55, 72, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(45, 55, 72, 0.2)';
                    }
                  }}
                >
                  {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent ✓' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info & Quick Links */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}>
              {/* Contact Information */}
              <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '24px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--primary-dark)'
                }}>
                  Contact Information
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(45, 55, 72, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>
                      📧
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--primary-dark)' }}>Email</div>
                      <a href="mailto:ruitaocchen@gmail.com" style={{ 
                        color: 'var(--text-secondary)', 
                        textDecoration: 'none',
                        cursor: 'pointer'
                      }}>
                        ruitaocchen@gmail.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(45, 55, 72, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>
                      💼
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--primary-dark)' }}>LinkedIn</div>
                      <a href="https://www.linkedin.com/in/ruitaocchen/" target="_blank" rel="noopener noreferrer" style={{ 
                        color: 'var(--text-secondary)', 
                        textDecoration: 'none',
                        cursor: 'pointer'
                      }}>
                        https://www.linkedin.com/in/ruitaocchen/
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(45, 55, 72, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>
                      📍
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--primary-dark)' }}>Location</div>
                      <div style={{ color: 'var(--text-secondary)' }}>Washington, DC</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(45, 55, 72, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>
                      ⏰
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--primary-dark)' }}>Response Time</div>
                      <div style={{ color: 'var(--text-secondary)' }}>Usually within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(45, 55, 72, 0.05), rgba(45, 55, 72, 0.02))',
                padding: '2rem',
                borderRadius: '24px',
                textAlign: 'center'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  background: 'rgba(67, 233, 123, 0.2)',
                  color: '#16a34a',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  🟢 Available for new projects
                </div>
                
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  color: 'var(--primary-dark)'
                }}>
                  Ready to Start?
                </h3>
                
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  I'm currently accepting new projects and would love to discuss how we can bring your ideas to life.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}