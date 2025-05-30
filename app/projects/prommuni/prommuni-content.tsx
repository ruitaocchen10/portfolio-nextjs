'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

export default function PrommuniProject() {
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
              background: 'rgba(67, 233, 123, 0.1)',
              color: '#43e97b',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              SaaS Platform • User Research • Social Features
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Prommuni
            </h1>

            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              A comprehensive SaaS platform for young professionals to find roommates and leases with similar-minded people, featuring web and mobile applications.
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
                  Product Designer
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  DURATION
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  8 months
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  TIMELINE
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  January 2025 - Present
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  TOOLS
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  Figma | Miro
                </p>
              </div>
            </div>

            {/* Skills Used */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {['User Research', 'SaaS Design', 'Social Features', 'Mobile Design', 'User Testing'].map((skill, index) => (
                <span 
                  key={index}
                  style={{
                    padding: '0.5rem 1.25rem',
                    background: 'rgba(67, 233, 123, 0.1)',
                    color: '#43e97b',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid rgba(67, 233, 123, 0.2)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Team Section */}
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(67, 233, 123, 0.05)',
              borderRadius: '16px',
              borderLeft: '4px solid #43e97b'
            }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--primary-dark)',
                marginBottom: '1rem'
              }}>
                Team
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)'
              }}>
                <div>Bradley Mascerenhas | CEO</div>
                <div>Prithvi Saran | Mobile Developer</div>
                <div>Roshini Venkateswaran | Mobile Developer</div>
                <div>Amanda Bozzi | Front End Developer</div>
                <div>Himanshu Gediya | Marketing/User Relations</div>
                <div>Harish Kumar | Full-Stack Developer</div>
              </div>
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
              background: 'linear-gradient(135deg, rgba(67, 233, 123, 0.1), rgba(56, 249, 215, 0.05))',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(67, 233, 123, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Image
                src="/images/PrommuniCoverMockup.png"
                alt="Prommuni Project Cover"
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
                background: 'linear-gradient(135deg, rgba(67, 233, 123, 0.05), rgba(56, 249, 215, 0.02))',
                padding: '3rem',
                borderRadius: '24px',
                marginBottom: '3rem'
              }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#43e97b',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  The Challenge
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--primary-dark)'
                }}>
                  Young professionals struggle to find compatible roommates and housing that aligns with their lifestyle and values
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  Traditional housing platforms focus on properties rather than people, making it difficult for young professionals to find living situations that match their lifestyle, work schedules, and personal values.
                </p>
              </div>
            </section>

            {/* Solution Overview */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#43e97b',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  OUR SOLUTION
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  A people-first approach to housing
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  Prommuni combines comprehensive roommate matching with housing search capabilities, creating a platform where young professionals can find both compatible living partners and suitable properties in one seamless experience.
                </p>
              </div>

              {/* Key Features Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                {[
                  {
                    icon: '🎯',
                    title: 'Smart Matching Algorithm',
                    description: 'Advanced compatibility scoring based on lifestyle preferences, work schedules, living habits, and personal values.'
                  },
                  {
                    icon: '🏠',
                    title: 'Integrated Housing Search',
                    description: 'Browse and filter properties while simultaneously finding compatible roommates for shared living arrangements.'
                  },
                  {
                    icon: '💬',
                    title: 'In-App Communication',
                    description: 'Secure messaging system for potential roommates to connect, chat, and plan before committing to shared housing.'
                  },
                  {
                    icon: '🔒',
                    title: 'Verified Profiles',
                    description: 'Multi-step verification process including background checks and employment verification for added safety and trust.'
                  }
                ].map((feature, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(67, 233, 123, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem'
                    }}>
                      {feature.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      color: 'var(--primary-dark)'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* User Research */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#43e97b',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  USER RESEARCH
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Understanding our users
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  Through extensive user interviews and surveys with young professionals across major cities, we identified key pain points and opportunities in the housing search process.
                </p>
              </div>

              {/* Research Insights */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  'Finding trustworthy roommates is the #1 concern',
                  '78% prefer living with professionals in similar fields',
                  'Safety and background verification are critical',
                  'Work schedule compatibility is highly valued',
                  'Budget transparency prevents misunderstandings',
                  'Location preferences vary by lifestyle needs'
                ].map((insight, index) => (
                  <div key={index} style={{
                    background: 'rgba(67, 233, 123, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    borderLeft: '4px solid #43e97b'
                  }}>
                    <p style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--primary-dark)',
                      margin: 0,
                      lineHeight: '1.4'
                    }}>
                      {insight}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Design Process */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#43e97b',
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
                  From research to solution
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '2rem'
              }}>
                {[
                  {
                    step: '01',
                    title: 'Discovery',
                    description: 'User interviews, market analysis, and competitive research'
                  },
                  {
                    step: '02',
                    title: 'Define',
                    description: 'Problem identification, user personas, and feature prioritization'
                  },
                  {
                    step: '03',
                    title: 'Design',
                    description: 'Wireframing, prototyping, and visual design systems'
                  },
                  {
                    step: '04',
                    title: 'Validate',
                    description: 'User testing, iterations, and stakeholder feedback'
                  }
                ].map((phase, index) => (
                  <div key={index} style={{
                    textAlign: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #43e97b, #38f9d7)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      margin: '0 auto 1rem auto'
                    }}>
                      {phase.step}
                    </div>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      marginBottom: '0.75rem',
                      color: 'var(--primary-dark)'
                    }}>
                      {phase.title}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Platform Features */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#43e97b',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  PLATFORM FEATURES
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Comprehensive SaaS solution
                </h2>
              </div>

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
                    Web & Mobile Applications
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem'
                  }}>
                    Responsive web application with native mobile apps for iOS and Android, ensuring users can search, match, and communicate seamlessly across all devices.
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    {[
                      { icon: '📱', text: 'Native mobile apps for iOS & Android' },
                      { icon: '💻', text: 'Responsive web application' },
                      { icon: '🔄', text: 'Real-time sync across all platforms' }
                    ].map((highlight, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontSize: '1rem',
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
                  background: 'linear-gradient(135deg, rgba(67, 233, 123, 0.1), rgba(56, 249, 215, 0.05))',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: '4rem',
                    color: '#43e97b',
                    fontWeight: '700'
                  }}>
                    Prommuni
                  </div>
                </div>
              </div>
            </section>

            {/* Impact & Results */}
            <section style={{ marginBottom: '5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#43e97b',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  PROJECT STATUS
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Currently in Development
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  Prommuni is actively being developed with plans to launch in major metropolitan areas. The platform represents a comprehensive solution to modern housing challenges faced by young professionals.
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(67, 233, 123, 0.05), rgba(56, 249, 215, 0.02))',
                padding: '3rem',
                borderRadius: '24px',
                textAlign: 'center'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.75rem 2rem',
                  background: 'rgba(67, 233, 123, 0.2)',
                  color: '#16a34a',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem'
                }}>
                  🚀 In Active Development
                </div>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Launching Soon
                </h3>
                
                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  margin: 0,
                  maxWidth: '600px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}>
                  Working closely with a talented development team to bring this vision to life, with beta testing planned for Q2 2025.
                </p>
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
                { name: 'KOMMA', href: '/projects/komma', description: 'Social Sports Platform' },
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