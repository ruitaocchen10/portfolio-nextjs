'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1000);
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
        minHeight: '100vh'
      }}>
        {/* Hero Section */}
        <section style={{
          padding: '6rem 3rem 4rem 3rem',
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
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
            📫 Let's Connect
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
            Get In Touch
          </h1>

          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto 3rem auto'
          }}>
            Have a project in mind or just want to chat about design? I'd love to hear from you. 
            Let's create something amazing together.
          </p>

          {/* Quick Contact Options */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}>
            <a 
              href="mailto:your.email@example.com" // Replace with your email
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                color: 'var(--primary-dark)',
                fontWeight: '600',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              📧 ruitaocchen@gmail.com
            </a>

            <a 
              href="https://www.linkedin.com/in/ruitaocchen/" // Replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                color: 'var(--primary-dark)',
                fontWeight: '600',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              💼 LinkedIn
            </a>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section style={{
          padding: '0 3rem 6rem 3rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start'
          }}>
            {/* Contact Form */}
            <div style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '30px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <h2 style={{
                fontSize: '2rem',
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
                Fill out the form below and I'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                    rows={6}
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
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info & FAQ */}
            <div>
              {/* Contact Info */}
              <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '24px',
                marginBottom: '2rem',
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
                      <div style={{ color: 'var(--text-secondary)' }}>ruitaocchen@gmail.com</div>
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

              {/* FAQ */}
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
                  Frequently Asked Questions
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    {
                      question: 'What\'s your typical project timeline?',
                      answer: 'Most projects take 4-12 weeks depending on scope and complexity. I\'ll provide a detailed timeline during our initial consultation.'
                    },
                    {
                      question: 'Do you work with remote teams?',
                      answer: 'Absolutely! I have experience collaborating with distributed teams and use modern tools to ensure smooth communication.'
                    },
                    {
                      question: 'What\'s included in your design process?',
                      answer: 'My process typically includes research, wireframing, prototyping, visual design, and user testing. I adapt based on project needs.'
                    }
                  ].map((faq, index) => (
                    <div key={index}>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        color: 'var(--primary-dark)'
                      }}>
                        {faq.question}
                      </h4>
                      <p style={{
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)'
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Availability Section */}
        <section style={{
          padding: '4rem 3rem',
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(45, 55, 72, 0.05), rgba(45, 55, 72, 0.02))',
            padding: '3rem 2rem',
            borderRadius: '30px'
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
            
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'var(--primary-dark)'
            }}>
              Ready to Start Your Project?
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '500px',
              margin: '0 auto 2rem auto'
            }}>
              I'm currently accepting new projects and would love to discuss how we can bring your ideas to life.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={() => {
                  const formSection = document.querySelector('form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
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
                Start a Project
              </button>

              <a 
                href="mailto:your.email@example.com?subject=Quick Question"
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
                Quick Question
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}