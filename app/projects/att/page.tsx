'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

export default function ATTProject() {
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
              background: 'rgba(240, 147, 251, 0.1)',
              color: '#f093fb',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              Mobile Design • User Research • Prototyping
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              American Top Team
            </h1>

            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              Mobile app redesign focused on adding features to a gym app to improve member retention and engagement for one of the world's most respected MMA gyms.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>ROLE</p>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>UI/UX Designer</p>
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>YEAR</p>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>2024</p>
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>TEAM</p>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>Solo Freelance Project</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {['User Interviews', 'Mobile Design', 'Prototyping', 'User Flow', 'User Testing'].map((skill) => (
                <span key={skill} style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(240, 147, 251, 0.1)',
                  color: '#f093fb',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Hero Image */}
          <div style={{
            height: '500px',
            background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.02))',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Image
              src="/images/3ScreenMockups.png"
              alt="ATT Mobile App Design"
              fill
              style={{
                objectFit: 'contain',
                borderRadius: '24px'
              }}
              priority
            />
          </div>
        </section>

        {/* Main Content */}
        <div style={{ 
          backgroundColor: 'white',
          padding: '6rem 3rem'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Project Overview */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '4rem',
                alignItems: 'start'
              }}>
                <div>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#f093fb',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Project Overview
                  </p>
                  <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '600',
                    lineHeight: '1.2',
                    color: 'var(--primary-dark)',
                    marginBottom: '1.5rem'
                  }}>
                    The Challenge
                  </h2>
                </div>
                <div>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem'
                  }}>
                    <strong>American Top Team (ATT)</strong> is one of the most respected mixed martial arts (MMA) gyms in the world, with a large network of locations primarily in the southern USA. As their membership base grew, they were struggling with outdated manual processes for managing members and communicating important information.
                  </p>
                  
                  <div style={{
                    background: '#f8f9fa',
                    padding: '2rem',
                    borderRadius: '16px',
                    borderLeft: '4px solid #f093fb'
                  }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
                      Core Requirements
                    </h3>
                    <ul style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                      <li><strong>Member Management System:</strong> Track all gym members, monitor membership status, and enable staff to quickly access member details</li>
                      <li><strong>Member Account Management:</strong> Allow new member sign-ups, profile management, self-service renewals, and handle different membership tiers</li>
                      <li><strong>News & Communication Hub:</strong> Deliver gym news, announcements, and updates directly to members with push notifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* User Research */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f093fb',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  User Research
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Understanding the Problem
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  I conducted comprehensive research using multiple methods to understand both business needs and user pain points before designing the solution.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {/* Stakeholder Interviews */}
                <div style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: 'var(--primary-dark)',
                    marginBottom: '0.5rem'
                  }}>
                    Stakeholder Interviews
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#f093fb',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    8 participants
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.5'
                  }}>
                    Gym managers, front desk staff, trainers, and admin coordinators
                  </p>
                  <ul style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    paddingLeft: '1.5rem',
                    listStyleType: 'disc'
                  }}>
                    <li style={{ marginBottom: '0.5rem' }}>Staff spending 3-4 hours daily on manual member tracking</li>
                    <li style={{ marginBottom: '0.5rem' }}>Peak hour bottlenecks with 2-3 minute check-in times</li>
                    <li style={{ marginBottom: '0.5rem' }}>No centralized communication system across locations</li>
                    <li style={{ marginBottom: '0.5rem' }}>Member retention drops significantly after 3 months</li>
                  </ul>
                </div>

                {/* Observational Research */}
                <div style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: 'var(--primary-dark)',
                    marginBottom: '0.5rem'
                  }}>
                    Observational Research
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#f093fb',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    3 ATT locations
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.5'
                  }}>
                    On-site observations during peak hours (morning, lunch, evening)
                  </p>
                  <ul style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    paddingLeft: '1.5rem',
                    listStyleType: 'disc'
                  }}>
                    <li style={{ marginBottom: '0.5rem' }}>15-20% of members couldn't remember membership status</li>
                    <li style={{ marginBottom: '0.5rem' }}>Important announcements frequently missed</li>
                    <li style={{ marginBottom: '0.5rem' }}>Front desk staff constantly interrupted by questions</li>
                    <li style={{ marginBottom: '0.5rem' }}>Members on phones while waiting - app opportunity</li>
                  </ul>
                </div>

                {/* Competitive Analysis */}
                <div style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: 'var(--primary-dark)',
                    marginBottom: '0.5rem'
                  }}>
                    Competitive Analysis
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#f093fb',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    12 fitness apps
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.5'
                  }}>
                    Including UFC Gym, Planet Fitness, ClassPass, and Mindbody
                  </p>
                  <ul style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    paddingLeft: '1.5rem',
                    listStyleType: 'disc'
                  }}>
                    <li style={{ marginBottom: '0.5rem' }}>No apps designed for combat sports gyms</li>
                    <li style={{ marginBottom: '0.5rem' }}>Poor integration between member and business features</li>
                    <li style={{ marginBottom: '0.5rem' }}>Complex onboarding processes (8-10 steps typical)</li>
                    <li style={{ marginBottom: '0.5rem' }}>News/announcements treated as afterthoughts</li>
                  </ul>
                </div>
              </div>

              {/* Primary Problems */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.02))',
                padding: '3rem',
                borderRadius: '20px',
                border: '1px solid rgba(240, 147, 251, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: 'var(--primary-dark)',
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>
                  Primary Problems to Solve
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem'
                }}>
                  {[
                    {
                      number: '01',
                      title: 'Operational Inefficiency',
                      description: 'Manual processes creating bottlenecks and high costs'
                    },
                    {
                      number: '02',
                      title: 'Communication Breakdown',
                      description: 'Members missing important updates and schedule changes'
                    },
                    {
                      number: '03',
                      title: 'Poor Member Experience',
                      description: 'Confusing onboarding and lack of self-service options'
                    }
                  ].map((problem, index) => (
                    <div key={index} style={{
                      background: 'white',
                      padding: '2rem',
                      borderRadius: '16px',
                      border: '1px solid rgba(240, 147, 251, 0.1)'
                    }}>
                      <div style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        color: '#f093fb',
                        marginBottom: '1rem'
                      }}>
                        {problem.number}
                      </div>
                      <h4 style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: 'var(--primary-dark)',
                        marginBottom: '0.5rem'
                      }}>
                        {problem.title}
                      </h4>
                      <p style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.5'
                      }}>
                        {problem.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Core Features */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f093fb',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Solution Design
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Core Features
                </h2>
              </div>

              <div style={{ marginBottom: '4rem' }}>
                {/* Quick Check-In System */}
                <div style={{
                  background: '#f8f9fa',
                  padding: '3rem',
                  borderRadius: '20px',
                  marginBottom: '3rem',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'start'
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: '600',
                        color: 'var(--primary-dark)',
                        marginBottom: '1.5rem'
                      }}>
                        Quick Check-In System
                      </h3>
                      <div style={{
                        background: 'rgba(245, 87, 108, 0.1)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        borderLeft: '4px solid #f5576c',
                        marginBottom: '2rem'
                      }}>
                        <p style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: '#f5576c',
                          marginBottom: '0.5rem'
                        }}>
                          PROBLEM SOLVED
                        </p>
                        <p style={{
                          fontSize: '1rem',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.5'
                        }}>
                          2-3 minute check-in times creating bottlenecks during peak hours
                        </p>
                      </div>
                      <p style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#f093fb',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        SOLUTION
                      </p>
                      <ul style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                        paddingLeft: '1.5rem',
                        listStyleType: 'disc'
                      }}>
                        <li style={{ marginBottom: '0.5rem' }}>QR code-based instant check-in (goal: under 30 seconds)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Offline-capable system for reliable gym environments</li>
                        <li style={{ marginBottom: '0.5rem' }}>Visual membership status display for staff verification</li>
                        <li style={{ marginBottom: '0.5rem' }}>Automatic attendance tracking and notifications</li>
                      </ul>
                    </div>
                    <div style={{
                      height: '400px',
                      background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.02))',
                      borderRadius: '16px',
                      border: '2px dashed rgba(240, 147, 251, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                      <div style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                      </div>
                     <Image
                        src="/images/QRCodeWireframeMockup.png"
                        alt="Check-in System Wireframes"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '16px' }}
                      /> 
                    </div>
                  </div>
                </div>

                {/* Self-Service Member Portal */}
                <div style={{
                  background: 'white',
                  padding: '3rem',
                  borderRadius: '20px',
                  marginBottom: '3rem',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'start'
                  }}>
                    <div style={{
                      height: '400px',
                      background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.02))',
                      borderRadius: '16px',
                      border: '2px dashed rgba(240, 147, 251, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                      <div style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👤</div>
                      </div>
                      {/* Uncomment and replace with your actual image */}
                      <Image
                        src="/images/MemberPortalMockup.png"
                        alt="Member Portal Wireframes"
                        fill
                        style={{ objectFit: 'contain', borderRadius: '16px' }}
                      />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: '600',
                        color: 'var(--primary-dark)',
                        marginBottom: '1.5rem'
                      }}>
                        Self-Service Member Portal
                      </h3>
                      <div style={{
                        background: 'rgba(245, 87, 108, 0.1)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        borderLeft: '4px solid #f5576c',
                        marginBottom: '2rem'
                      }}>
                        <p style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: '#f5576c',
                          marginBottom: '0.5rem'
                        }}>
                          PROBLEM SOLVED
                        </p>
                        <p style={{
                          fontSize: '1rem',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.5'
                        }}>
                          Staff overwhelmed with repetitive questions about accounts and schedules
                        </p>
                      </div>
                      <p style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#f093fb',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        SOLUTION
                      </p>
                      <ul style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                        paddingLeft: '1.5rem',
                        listStyleType: 'disc'
                      }}>
                        <li style={{ marginBottom: '0.5rem' }}>Complete membership management (view status, renew, update payments)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Personal class schedule with real-time updates</li>
                        <li style={{ marginBottom: '0.5rem' }}>Digital membership card and guest pass management</li>
                        <li style={{ marginBottom: '0.5rem' }}>FAQ and gym policy access without staff assistance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Centralized News Hub */}
                <div style={{
                  background: '#f8f9fa',
                  padding: '3rem',
                  borderRadius: '20px',
                  marginBottom: '3rem',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'start'
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: '600',
                        color: 'var(--primary-dark)',
                        marginBottom: '1.5rem'
                      }}>
                        Centralized News Hub
                      </h3>
                      <div style={{
                        background: 'rgba(245, 87, 108, 0.1)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        borderLeft: '4px solid #f5576c',
                        marginBottom: '2rem'
                      }}>
                        <p style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: '#f5576c',
                          marginBottom: '0.5rem'
                        }}>
                          PROBLEM SOLVED
                        </p>
                        <p style={{
                          fontSize: '1rem',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.5'
                        }}>
                          Members missing important announcements posted on bulletin boards
                        </p>
                      </div>
                      <p style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#f093fb',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        SOLUTION
                      </p>
                      <ul style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                        paddingLeft: '1.5rem',
                        listStyleType: 'disc'
                      }}>
                        <li style={{ marginBottom: '0.5rem' }}>Prominent news feed on home screen with priority messaging</li>
                        <li style={{ marginBottom: '0.5rem' }}>Push notifications for urgent updates (schedule changes, events)</li>
                        <li style={{ marginBottom: '0.5rem' }}>Event calendar with RSVP functionality</li>
                        <li style={{ marginBottom: '0.5rem' }}>Location-specific announcements for multi-gym network</li>
                      </ul>
                    </div>
                    <div style={{
                      height: '400px',
                      background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.02))',
                      borderRadius: '16px',
                      border: '2px dashed rgba(240, 147, 251, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                      <div style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📰</div>
                      </div>
                      {/* Uncomment and replace with your actual image */}
                      <Image
                        src="/images/HomeWireframeMockup.png"
                        alt="News Hub Wireframes"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '16px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Usability Testing */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f093fb',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Validation & Testing
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Two Rounds of Usability Testing
                </h2>
              </div>

              {/* First Round */}
              <div style={{
                background: '#f8f9fa',
                padding: '3rem',
                borderRadius: '20px',
                marginBottom: '3rem',
                border: '1px solid #e9ecef'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '3rem',
                  marginBottom: '2rem'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: '600',
                      color: 'var(--primary-dark)',
                      marginBottom: '1rem'
                    }}>
                      First Round Testing
                    </h3>
                    <div style={{
                      background: 'white',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      border: '1px solid #e9ecef'
                    }}>
                      <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#f093fb', marginBottom: '0.5rem' }}>
                        METHOD
                      </p>
                      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        <strong>6 participants:</strong> 2 current ATT members, 2 front desk staff, 2 potential new members<br/>
                        <strong>Format:</strong> In-person moderated sessions (45 minutes each)<br/>
                        <strong>Prototype:</strong> Low-fidelity mobile app
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: 'var(--primary-dark)',
                      marginBottom: '1rem'
                    }}>
                      Critical Issues Identified
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        {
                          title: 'Missing Feedback States',
                          description: 'Users unsure if check-in was successful - 50% tried to check in multiple times'
                        },
                        {
                          title: 'Payment Management Hidden',
                          description: '4/6 participants couldn\'t locate payment update feature'
                        },
                        {
                          title: 'Staff Navigation Inconsistency',
                          description: 'Different navigation patterns confused staff users'
                        }
                      ].map((issue, idx) => (
                        <div key={idx} style={{
                          background: 'rgba(245, 87, 108, 0.1)',
                          padding: '1rem',
                          borderRadius: '8px',
                          borderLeft: '3px solid #f5576c'
                        }}>
                          <p style={{ fontWeight: '600', color: '#f5576c', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                            {issue.title}
                          </p>
                          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            {issue.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Round */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.02))',
                padding: '3rem',
                borderRadius: '20px',
                border: '1px solid rgba(240, 147, 251, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: 'var(--primary-dark)',
                  marginBottom: '2rem'
                }}>
                  Second Round Testing - Issues Resolved
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem',
                  marginBottom: '2rem'
                }}>
                  {[
                    {
                      title: '✅ Missing Feedback States',
                      solution: 'Added animated confirmation with checkmark and "You\'re checked in!" message',
                      result: '5/5 participants successfully checked in on first attempt'
                    },
                    {
                      title: '✅ Hidden Payment Management',
                      solution: 'Moved payment settings to main profile with visual card icons',
                      result: 'All participants found payment options within 15 seconds'
                    },
                    {
                      title: '✅ Navigation Inconsistency',
                      solution: 'Unified navigation structure with consistent back button behavior',
                      result: 'Staff task completion time reduced by 60%'
                    }
                  ].map((fix, idx) => (
                    <div key={idx} style={{
                      background: 'white',
                      padding: '2rem',
                      borderRadius: '16px',
                      border: '1px solid rgba(240, 147, 251, 0.1)'
                    }}>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--primary-dark)',
                        marginBottom: '1rem'
                      }}>
                        {fix.title}
                      </h4>
                      <p style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '1rem',
                        lineHeight: '1.5'
                      }}>
                        <strong>Solution:</strong> {fix.solution}
                      </p>
                      <p style={{
                        fontSize: '0.95rem',
                        color: '#28a745',
                        fontWeight: '600'
                      }}>
                        <strong>Result:</strong> {fix.result}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Success Metrics */}
                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(240, 147, 251, 0.1)',
                  textAlign: 'center'
                }}>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: 'var(--primary-dark)',
                    marginBottom: '1.5rem'
                  }}>
                    Final Success Metrics
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem'
                  }}>
                    {[
                      { metric: '95%', description: 'Task completion rate', improvement: 'up from 70%' },
                      { metric: '40%', description: 'Reduction in task time', improvement: 'average across all tasks' },
                      { metric: '4.6/5', description: 'User satisfaction score', improvement: 'up from 3.2/5' }
                    ].map((stat, idx) => (
                      <div key={idx}>
                        <div style={{
                          fontSize: '2rem',
                          fontWeight: '700',
                          color: '#f093fb',
                          marginBottom: '0.5rem'
                        }}>
                          {stat.metric}
                        </div>
                        <p style={{
                          fontSize: '1rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.25rem'
                        }}>
                          {stat.description}
                        </p>
                        <p style={{
                          fontSize: '0.85rem',
                          color: '#28a745',
                          fontWeight: '600'
                        }}>
                          ({stat.improvement})
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Final Designs */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f093fb',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Final Designs
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  High-Fidelity Mockups
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}>
                  The final designs incorporated all user feedback and testing insights, delivering solutions that directly addressed each identified problem.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '3rem'
              }}>
                {/* Design 1 */}
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #e9ecef',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    height: '500px',
                    background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.02))',
                    border: '2px dashed rgba(240, 147, 251, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <div style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                    </div>
                    {/* Uncomment and replace with your actual image */}
                    <Image
                      src="/images/QRCodeMockup.png"
                      alt="Final Design 1"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: 'var(--primary-dark)',
                      marginBottom: '1rem'
                    }}>
                      Quick Check-In Flow
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6'
                    }}>
                      QR code scanning with instant feedback reduces check-in time from 2-3 minutes to under 30 seconds, eliminating peak hour bottlenecks.
                    </p>
                  </div>
                </div>

                {/* Design 2 */}
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #e9ecef',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    height: '500px',
                    background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.02))',
                    border: '2px dashed rgba(240, 147, 251, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <div style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👤</div>
                    </div>
                    {/* Uncomment and replace with your actual image */}
                    <Image
                      src="/images/MembershipMockup.png"
                      alt="Final Design 2"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: 'var(--primary-dark)',
                      marginBottom: '1rem'
                    }}>
                      Member Profile Dashboard
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6'
                    }}>
                      Self-service portal allows members to manage accounts independently, reducing staff interruptions by 70% and improving member satisfaction.
                    </p>
                  </div>
                </div>

                {/* Design 3 */}
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #e9ecef',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    height: '500px',
                    background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.02))',
                    border: '2px dashed rgba(240, 147, 251, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <div style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📰</div>
                    </div>
                    {/* Uncomment and replace with your actual image */}
                    <Image
                      src="/images/HomeMockup.png"
                      alt="Final Design 3"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: 'var(--primary-dark)',
                      marginBottom: '1rem'
                    }}>
                      News & Announcements Hub
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6'
                    }}>
                      Prominent news feed with push notifications ensured 100% of members received important updates, eliminating missed announcements.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
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
  { name: 'Macro Meal Generator', href: '/projects/macro-meal', description: 'AI-Powered Nutrition' },
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
          </div>
        </div>
      </main>
    </>
  );
}