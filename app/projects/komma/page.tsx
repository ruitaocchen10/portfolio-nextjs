'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

export default function KommaProject() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        {/* Back Navigation */}
        <div style={{ padding: '2rem 3rem 0 3rem', maxWidth: '1400px', margin: '0 auto' }}>
          <Link 
            href="/projects" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(-4px)';
              e.currentTarget.style.color = 'var(--primary-dark)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <section style={{
          padding: '3rem 3rem 6rem 3rem',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center'
        }}>
          {/* Left - Project Info */}
          <div>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(102, 126, 234, 0.1)',
              color: '#667eea',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              Full Stack Development • Sports Platform
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              KOMMA
            </h1>

            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              Full stack design and development of a fantasy sports app for fans of Mixed-Martial Arts, designed to engage both hardcore and casual MMA enthusiasts.
            </p>

            {/* Project Details */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  ROLE
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  Solo Started Project
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  DURATION
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  2 years
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  TIMELINE
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  January 2023 - Present
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  TOOLS
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  Figma
                </p>
              </div>
            </div>

            {/* Skills Used */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {['UX Research', 'UI Design', 'Full Stack Development', 'User Personas', 'Prototyping'].map((skill, index) => (
                <span 
                  key={index}
                  style={{
                    padding: '0.5rem 1.25rem',
                    background: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid rgba(102, 126, 234, 0.2)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Cover Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              height: '400px',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.05))',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(102, 126, 234, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Image
                src="/images/KOMMACoverMockup.png"
                alt="KOMMA Project Cover"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '30px'
                }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div style={{ 
          backgroundColor: 'white',
          padding: '6rem 3rem'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Problem Statement */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                marginBottom: '3rem'
              }}>
                <div>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#667eea',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    MIXED-MARTIAL ARTS FANS NEED A BETTER COMMUNITY
                  </p>
                  <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    color: 'var(--primary-dark)',
                    margin: 0
                  }}>
                    UFC fans want to play fantasy sports to showcase their knowledge of fighters while competing with their friends. It adds excitement, personal stakes, and monetary value in some cases.
                  </h2>
                </div>
                <div style={{
                  height: '300px',
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.05))',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <Image
                    src="/images/KOMMATestimonials.png"
                    alt="KOMMA User Testimonials"
                    fill
                    style={{
                      objectFit: 'contain',
                      padding: '2rem'
                    }}
                  />
                </div>
              </div>
            </section>

            {/* User Interviews */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  USER INTERVIEWS
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  What do the fans think?
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  I conducted 5 personal user interviews with MMA and other sports fans between the ages of 18-30 to find out what they were lacking in the UFC fan community. Here's what I found:
                </p>
              </div>

              <div style={{
                height: '400px',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.02))',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '4rem'
              }}>
                <Image
                  src="/images/KOMMATestimonials.png"
                  alt="User Interview Insights"
                  fill
                  style={{
                    objectFit: 'contain',
                    padding: '3rem'
                  }}
                />
              </div>
            </section>

            {/* User Personas */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  GAMEPLAY
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Understanding the fans
                </h2>
              </div>

              {/* Persona Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem'
              }}>
                {/* Hardcore Fan */}
                <div style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(102, 126, 234, 0.1)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <Image
                        src="/images/Stickland.jpeg"
                        alt="The Hardcore Fan"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        color: 'var(--primary-dark)'
                      }}>
                        The Hardcore Fan
                      </h3>
                      <div style={{
                        display: 'flex',
                        gap: '1rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)'
                      }}>
                        <span>30 y.o</span>
                        <span>Single</span>
                        <span>Male</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                        MMA Knowledge
                      </span>
                      <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#667eea' }}>
                        High
                      </span>
                    </div>
                    <div style={{
                      height: '8px',
                      background: '#f0f0f0',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '90%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        borderRadius: '4px'
                      }} />
                    </div>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: 'var(--primary-dark)'
                    }}>
                      Pain Points
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'Limited event pool',
                        'Infrequent Updates',
                        'Current Boring Gameplay',
                        'Limited Competition Formats'
                      ].map((point, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          marginBottom: '0.75rem',
                          fontSize: '1rem',
                          color: 'var(--text-secondary)'
                        }}>
                          <span style={{ color: '#667eea', fontSize: '1.2rem' }}>⚡</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Casual Fan */}
                <div style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(102, 126, 234, 0.1)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <Image
                        src="/images/Guyatbar.jpeg"
                        alt="The Casual Fan"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        color: 'var(--primary-dark)'
                      }}>
                        The Casual Fan
                      </h3>
                      <div style={{
                        display: 'flex',
                        gap: '1rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)'
                      }}>
                        <span>27 y.o</span>
                        <span>Single</span>
                        <span>Male</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                        MMA Knowledge
                      </span>
                      <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#667eea' }}>
                        Low to Medium
                      </span>
                    </div>
                    <div style={{
                      height: '8px',
                      background: '#f0f0f0',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '45%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        borderRadius: '4px'
                      }} />
                    </div>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: 'var(--primary-dark)'
                    }}>
                      Pain Points
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'Time Commitment',
                        'Access to Information',
                        'Confusing scoring formats',
                        'Limited Knowledge/Motivation'
                      ].map((point, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          marginBottom: '0.75rem',
                          fontSize: '1rem',
                          color: 'var(--text-secondary)'
                        }}>
                          <span style={{ color: '#667eea', fontSize: '1.2rem' }}>⏰</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Draft Options Analysis */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  DESIGN PROCESS
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  I came up with several options
                </h2>
              </div>

              {/* Draft Options */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
                marginBottom: '4rem'
              }}>
                {[
                  {
                    title: 'New Draft Every Card',
                    icon: '📝',
                    description: 'Users pick a new team for every card they wish to play',
                    frequency: 'High',
                    engagement: 'High',
                    recommended: false
                  },
                  {
                    title: 'New Draft Every Pay-Per-View',
                    icon: '💰',
                    description: 'Users pick a new team between each PPV',
                    frequency: 'Medium',
                    engagement: 'High',
                    recommended: true
                  },
                  {
                    title: 'New Draft Every Year',
                    icon: '📅',
                    description: 'Users pick a new team every calendar year',
                    frequency: 'Low',
                    engagement: 'Medium',
                    recommended: false
                  }
                ].map((option, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    boxShadow: option.recommended 
                      ? '0 12px 40px rgba(102, 126, 234, 0.2)' 
                      : '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: option.recommended 
                      ? '2px solid #667eea' 
                      : '1px solid rgba(255, 255, 255, 0.2)',
                    position: 'relative'
                  }}>
                    {option.recommended && (
                      <div style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#667eea',
                        color: 'white',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        Recommended
                      </div>
                    )}
                    
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem'
                    }}>
                      {option.icon}
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      color: 'var(--primary-dark)'
                    }}>
                      {option.title}
                    </h3>
                    
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.5',
                      color: 'var(--text-secondary)',
                      marginBottom: '1.5rem'
                    }}>
                      {option.description}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '1rem'
                    }}>
                      <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                          Frequency
                        </div>
                        <div style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: option.frequency === 'High' ? '#e53e3e' : option.frequency === 'Medium' ? '#dd6b20' : '#38a169'
                        }}>
                          {option.frequency}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                          Engagement
                        </div>
                        <div style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: option.engagement === 'High' ? '#38a169' : '#dd6b20'
                        }}>
                          {option.engagement}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Insight */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.02))',
                padding: '2rem',
                borderRadius: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  💡 Key Insight
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  The PPV model strikes the perfect balance between engagement and usability, offering regular interaction without overwhelming casual users.
                </p>
              </div>
            </section>

            {/* Scoring System */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  SCORING SYSTEM
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  I had to test and improve my scoring system
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  After taking some of the feedback from my friends and calculating a couple stats, I was able to come up with an initial scoring system. However, I wanted to make it as accurate as possible, so I ran the numbers with some existing UFC PPVs and made some scoring accordingly.
                </p>
              </div>

              <div style={{
                height: '500px',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.02))',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <Image
                  src="/images/ScoringSystem.png"
                  alt="KOMMA Scoring System Data"
                  fill
                  style={{
                    objectFit: 'contain',
                    padding: '3rem'
                  }}
                />
              </div>
            </section>

            {/* Solutions */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  SOLUTIONS
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Mobile app design focused on ease of use and social engagement
                </h2>
              </div>

              {/* App Preview */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                marginBottom: '4rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--primary-dark)'
                  }}>
                    Intuitive Mobile Experience
                  </h3>
                  <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem'
                  }}>
                    Designed with both hardcore and casual fans in mind, the app prioritizes simplicity without sacrificing depth. Clean interfaces guide users through league creation, drafting, and ongoing management.
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    {[
                      { icon: '⚡', text: 'Quick league setup' },
                      { icon: '👥', text: 'Social-first design' },
                      { icon: '📱', text: 'Mobile-optimized' }
                    ].map((highlight, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)'
                      }}>
                        <span style={{ fontSize: '1.3rem' }}>{highlight.icon}</span>
                        {highlight.text}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div style={{
                  height: '400px',
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.05))',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <Image
                    src="/images/KOMMATest.png"
                    alt="KOMMA App Screens"
                    fill
                    style={{
                      objectFit: 'contain',
                      padding: '2rem'
                    }}
                  />
                </div>
              </div>

              {/* Feature Breakdown */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem',
                marginBottom: '4rem'
              }}>
                {[
                  {
                    number: '1',
                    title: 'League Creation',
                    description: 'Creators can choose a league name, size, and league type with an intuitive setup flow that takes less than 2 minutes.',
                    tags: ['Quick Setup', 'Customizable'],
                    color: '#667eea'
                  },
                  {
                    number: '2',
                    title: 'Intuitive Navigation',
                    description: 'Users are brought to a centralized league page where they can manage teams, invite friends, and track progress all in one place.',
                    tags: ['Centralized', 'User-Friendly'],
                    color: '#764ba2'
                  },
                  {
                    number: '3',
                    title: 'Smart Draft Interface',
                    description: 'Streamlined drafting with fighter stats, AI recommendations, and real-time updates to help both casual and hardcore fans make informed picks.',
                    tags: ['AI-Powered', 'Real-time'],
                    color: '#667eea'
                  },
                  {
                    number: '4',
                    title: 'Social Engagement',
                    description: 'Multiple invitation methods including shareable links and in-app invites, plus live chat and league leaderboards to keep competition fun.',
                    tags: ['Social', 'Competitive'],
                    color: '#764ba2'
                  }
                ].map((feature, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '2rem',
                      width: '40px',
                      height: '40px',
                      background: feature.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '1.2rem'
                    }}>
                      {feature.number}
                    </div>
                    
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      marginTop: '1rem',
                      color: 'var(--primary-dark)'
                    }}>
                      {feature.title}
                    </h4>
                    
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      marginBottom: '1.5rem'
                    }}>
                      {feature.description}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      gap: '0.5rem',
                      flexWrap: 'wrap'
                    }}>
                      {feature.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} style={{
                          padding: '0.25rem 0.75rem',
                          background: `${feature.color}15`,
                          color: feature.color,
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Design Principles */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.02))',
                padding: '3rem',
                borderRadius: '24px'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  textAlign: 'center',
                  color: 'var(--primary-dark)'
                }}>
                  Design Principles
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2rem'
                }}>
                  {[
                    {
                      icon: '🎯',
                      title: 'Simplicity First',
                      description: 'Every interaction should be intuitive, even for first-time fantasy sports players'
                    },
                    {
                      icon: '👥',
                      title: 'Social by Design',
                      description: 'Features that bring friends together and create shared experiences around MMA'
                    },
                    {
                      icon: '⚖️',
                      title: 'Balanced Engagement',
                      description: 'Engaging for hardcore fans while remaining accessible to casual viewers'
                    }
                  ].map((principle, index) => (
                    <div key={index} style={{
                      textAlign: 'center',
                      padding: '1.5rem'
                    }}>
                      <div style={{
                        fontSize: '3rem',
                        marginBottom: '1rem'
                      }}>
                        {principle.icon}
                      </div>
                      <h4 style={{
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: 'var(--primary-dark)'
                      }}>
                        {principle.title}
                      </h4>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)',
                        margin: 0
                      }}>
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Project Takeaways */}
            <section style={{ marginBottom: '5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  PROJECT TAKEAWAYS
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Key Learnings
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem'
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--primary-dark)'
                  }}>
                    📊 Testing and Retesting
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}>
                    When coming up with the initial scoring system, there were many flaws. Only by important constant testing and retesting was I able to get a framework I was happy with. I think that the old "trial and error" method that has been looked down upon at times is actually quite valuable in this instance.
                  </p>
                </div>

                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--primary-dark)'
                  }}>
                    👥 There are never too many users to speak to
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}>
                    I found that every interview that I did, I was able to gain new insights. At some point, I stopped considering every session an "interview" and treated them more as conversations about a topic that we're both passionate about.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <section style={{
          backgroundColor: '#f9f9f9',
          padding: '4rem 3rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'var(--primary-dark)'
            }}>
              Explore More Projects
            </h2>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '3rem',
              color: 'var(--text-secondary)'
            }}>
              Check out my other design work and case studies
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { name: 'Prommuni', href: '/projects/prommuni', description: 'SaaS Platform' },
                { name: 'ATT', href: '/projects/att', description: 'Mobile App Redesign' },
                { name: 'SellMax', href: '/projects/sellmax', description: 'Web App Updates' }
              ].map((project, index) => (
                <Link
                  key={index}
                  href={project.href}
                  style={{
                    display: 'block',
                    padding: '2rem',
                    background: 'white',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    color: 'var(--primary-dark)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    {project.name}
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}